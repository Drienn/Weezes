const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const fileType = path.basename(process.argv[2]);
const file = path.basename(process.argv[3]);
const flags = process.argv.slice(4);
const classFlag = flags.some(flag => flag.includes('class'));
const reduxFlag = flags.some(flag => flag.includes('redux'));

const successLog = message => console.log('\x1b[32m%s\x1b[0m', message);
const errorLog = (message, err = '') => {
  console.log('\x1b[31m%s\x1b[0m', message, err);
};

const makeContainerStyleName = name =>
  `${name
    .split('')
    .map((l, i) => {
      if (i === 0) return l.toLowerCase();
      if (l.toUpperCase() === name[i]) return `-${l.toLowerCase()}`;
      return l;
    })
    .join('')}-container`;

const createReactFunctionalComponent = () => `import React from 'react';
// import PropTypes from 'prop-types';
import './${file}.css';

const ${file} = () => (
  <div className="${makeContainerStyleName(file)}">
    <h1>${file}</h1>
  </div>
);

// ${file}.propTypes = {};

// ${file}.defaultProps = {};

export default ${file};
`;

const createReactClassComponent = () => `import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ${file} extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="${makeContainerStyleName(file)}">
        <h1>${file}</h1>
      </div>
    );
  }
}

// ${file}.propTypes = {};

// ${file}.defaultProps = {};

export default ${file};
`;

const createReduxReactFunctionalComponent = () => `import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './${file}.css';

const ${file} = () => (
  <div className="${makeContainerStyleName(file)}">
    <h1>${file}</h1>
  </div>
);

// ${file}.propTypes = {};

// ${file}.defaultProps = {};

const mapState = () => ({});

export default connect(
  mapState,
  {}
)(${file});
`;

const createReduxReactClassComponent = () => `import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './${file}.css';

class ${file} extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="${makeContainerStyleName(file)}">
        <h1>${file}</h1>
      </div>
    );
  }
}

// ${file}.propTypes = {};

// ${file}.defaultProps = {};

const mapState = () => ({});

export default connect(
  mapState,
  {}
)(${file});
`;

const createStory = () => {
  let storyFolder;
  if (fileType === 'atom') storyFolder = 'Atoms';
  if (fileType === 'molecule') storyFolder = 'Molecules';
  if (fileType === 'organism') storyFolder = 'Organisms';

  if (reduxFlag) {
    return `import React from 'react';
/* eslint-disable */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../../redux/reducers';
import thunk from 'redux-thunk';
import { storiesOf } from '@storybook/react';
import ${file} from './${file}';
  
const store = createStore(rootReducer, applyMiddleware(thunk));
  
storiesOf('${storyFolder}/${file}', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('Default', () => <${file} />);
`;
  }
  return `import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import ${file} from './${file}';

storiesOf('${storyFolder}/${file}', module)
  .add('Default', () => (
    <${file} />
  ));
`;
};

const createTest = () => {
  const camelCaseComponent = file[0].toLowerCase() + file.substr(1);

  return `import React from 'react';
/* eslint-disable */
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import ${file} from './${file}';

configure({ adapter: new Adapter() });

describe('${file} - ${fileType}', () => {
  /**********************
   * Initialization
   **********************/

  // setup mock functions

  // setup initial props
  const props = {};
   

  // create a shallow or mounted copy
  const ${camelCaseComponent} = shallow(<${file} {...props} />);

  /**********************
   * Tests
   **********************/

  /* Rendering Tests */
  describe('Rendering', () => {
    it('renders the ${camelCaseComponent}', () => {
      expect(${camelCaseComponent}).toMatchSnapshot();
    });
  });

  // Event Tests
  describe('Event Handlers', () => {

  });

  // Prop Tests
  describe('Incoming Props', () => {
    
  });
});`;
};

const createReduxActions = () => `import * as types from '../constants/types';

export const getCallback = data => dispatch => {
  dispatch({
    type: types.${file.toUpperCase()}_SUCCESS,
    payload: { data },
  });
};

export const get${file[0].toUpperCase()}${file.substr(1)} = () => dispatch => {
  dispatch({
    type: types.API,
    payload: {
      method: 'get',
      path: '/${file}',
      success: data => successCallback(data),
    },
  });
};
`;

const createReduxReducer = () => `import * as types from '../constants/types';

const initialState = {
  data: [],
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.${file.toUpperCase()}:
      return { ...state, ...payload };
    default:
      return state;
  }
}
`;

const createRedux = () => {
  if (file[0].toUpperCase() === file[0] || file.includes('-'))
    return errorLog('redux file names must be camelCase');

  const actionsDir = './src/redux/actions';
  const reducersDir = './src/redux/reducers';

  // ** Create Actions ** //
  fs.writeFile(`${actionsDir}/${file}.js`, `${createReduxActions()}`, 'utf8', err => {
    if (err) errorLog('could not create action file -', err);
  });

  // ** Create Reducer ** //
  fs.writeFile(`${reducersDir}/${file}Reducer.js`, `${createReduxReducer()}`, 'utf8', err => {
    if (err) errorLog('could not create reducer file -', err);
  });

  // ** Adds export line at the bottom of the actions index.js file ** //
  fs.readFile(`${actionsDir}/index.js`, (err, data) => {
    if (err) return errorLog('could not read index file', err);
    data = data.toString().split(';\n');
    data.pop();
    data.push(`export * from './${file}';\n`);
    data = data.join(';\n');
    fs.writeFile(
      `${actionsDir}/index.js`,
      data,
      importErr => importErr && errorLog('could not auto import component', importErr)
    );
    return successLog(`${file} action auto export succesful!`);
  });

  // ** Adds import line at the bottom of the reducer's imports index.js file ** //
  fs.readFile(`${reducersDir}/index.js`, (err, data) => {
    if (err) return errorLog('could not read index file', err);
    data = data.toString().split('\n');
    const rootReducerIndex = data.findIndex(d => d.includes('const'));
    data.splice(rootReducerIndex - 1, 0, `import ${file} from './${file}Reducer';`);
    data.splice(-4, 0, `  ${file},`);

    fs.writeFile(
      `${reducersDir}/index.js`,
      data.join('\n'),
      importErr => importErr && errorLog('could not auto import reducer', importErr)
    );
    return successLog(`${file} reducer auto import succesful!`);
  });

  exec(`code ${actionsDir}/${file}.js`);
  exec(`code ${reducersDir}/${file}Reducer.js`);
  return successLog('Happy Coding!');
};

// ************* CREATES COMPONENT **************** //
const createAtomicFileTree = type => {
  if (file[0].toLowerCase() === file[0] || file.includes('-'))
    return errorLog('Component Names Must Be "PascalCase"');

  let dir;
  if (type === 'atom') dir = `./src/components/atoms/${file}`;
  if (type === 'molecule') dir = `./src/components/molecules/${file}`;
  if (type === 'organism') dir = `./src/components/organisms/${file}`;

  // ** Does nothing if the file is already created ** //
  if (fs.existsSync(`${dir}/${file}.jsx`)) return errorLog('Component Already Exists');

  // ** Creates the directory in which the component will live ** //
  fs.mkdir(dir, err => {
    if (err) errorLog('could not create directory for component -', err);
  });

  // ** Creates the CSS and SCSS file for the component"
  fs.writeFile(
    `${dir}/${file}.css`,
    `.${makeContainerStyleName(file)} {
      height: unset;
      width: unset;
    }
    `,
    'utf8',
    err => {
      if (err) errorLog('could not create css file -', err);
    }
  );
  fs.writeFile(
    `${dir}/${file}.scss`,
    `.${makeContainerStyleName(file)} {
  height: unset;
  width: unset;
}
`,
    'utf8',
    err => {
      if (err) errorLog('could not create scss file -', err);
    }
  );

  // ** Creates the atom/molecule/organism ** //
  const requestedComopnent = () => {
    if (classFlag && reduxFlag) return createReduxReactClassComponent();
    if (reduxFlag) return createReduxReactFunctionalComponent();
    if (classFlag) return createReactClassComponent();

    return createReactFunctionalComponent();
  };

  fs.writeFile(`${dir}/${file}.jsx`, requestedComopnent(), 'utf8', err => {
    if (err) errorLog('could not create component -', err);
  });

  // ** Creates the Component story file ** //
  fs.writeFile(`${dir}/${file}.stories.js`, createStory(), 'utf8', err => {
    if (err) errorLog('could not create story file -', err);
  });
  // ** Creates the Component test file ** //
  fs.writeFile(`${dir}/${file}.test.js`, createTest(), 'utf8', err => {
    if (err) errorLog('could not create test file -', err);
  });

  if (fs.existsSync(`${dir}/${file}.jsx`)) {
    successLog(`${type} created: ${file}.jsx`);
    successLog(`also created: ${file}.css, ${file}.scss, ${file}.story.js, ${file}.test.js`);

    // ** Adds import line at the bottom of the respective index.js file ** //
    fs.readFile(`./src/components/${type}s/index.js`, (err, data) => {
      if (err) return errorLog('could not read index file', err);
      data = data.toString().split(';\n');
      data.pop();
      data.push(`export { default as ${file} } from './${file}/${file}';\n`);

      fs.writeFile(
        `./src/components/${type}s/index.js`,
        data.join(';\n'),
        importErr => importErr && errorLog('could not auto import component', importErr)
      );
      successLog('auto import succesful!');
      successLog('Happy Coding!');
      return exec(`code ./src/components/${fileType}s/${file}/${file}.jsx`);
    });
  }
  return null;
};

if (fileType !== 'redux') {
  createAtomicFileTree(fileType);
} else {
  createRedux();
}

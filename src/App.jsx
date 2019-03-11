import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import Router from 'components/router/';
import { connect } from 'react-redux';

import * as Actions from './redux/actions';

import 'App.css';
import 'style/global.css';

const App = ({ theme }) => (
  <BrowserRouter>
    <div className={`App ${theme}`} onScroll={() => console.log('scorlling!')}>
      <Router className="main" />
    </div>
  </BrowserRouter>
);

App.propTypes = {
  theme: PropTypes.string,
};

App.defaultProps = {
  theme: '',
};

const mapState = ({ theme }) => ({ theme: theme.theme });
const mapDispatch = dispatch => ({
  setTheme: theme => dispatch(Actions.setTheme(theme)),
});

export default connect(
  mapState,
  mapDispatch,
)(App);

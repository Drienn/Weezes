import React from 'react';
/* eslint-disable */
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Main from './Main';

configure({ adapter: new Adapter() });

describe('Main - atom', () => {
  /**********************
   * Initialization
   **********************/

  // setup mock functions

  // setup initial props
  const props = {};
   

  // create a shallow or mounted copy
  const main = shallow(<Main {...props} />);

  /**********************
   * Tests
   **********************/

  /* Rendering Tests */
  describe('Rendering', () => {
    it('renders the main', () => {
      expect(main).toMatchSnapshot();
    });
  });

  // Event Tests
  describe('Event Handlers', () => {

  });

  // Prop Tests
  describe('Incoming Props', () => {
    
  });
});
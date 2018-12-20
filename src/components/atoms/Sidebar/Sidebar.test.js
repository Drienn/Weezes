import React from 'react';
/* eslint-disable */
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Sidebar from './Sidebar';

configure({ adapter: new Adapter() });

describe('Sidebar - atom', () => {
  /**********************
   * Initialization
   **********************/

  // setup mock functions

  // setup initial props
  const props = {};
   

  // create a shallow or mounted copy
  const sidebar = shallow(<Sidebar {...props} />);

  /**********************
   * Tests
   **********************/

  /* Rendering Tests */
  describe('Rendering', () => {
    it('renders the sidebar', () => {
      expect(sidebar).toMatchSnapshot();
    });
  });

  // Event Tests
  describe('Event Handlers', () => {

  });

  // Prop Tests
  describe('Incoming Props', () => {
    
  });
});
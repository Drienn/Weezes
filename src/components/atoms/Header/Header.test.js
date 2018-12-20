import React from 'react';
/* eslint-disable */
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Header from './Header';

configure({ adapter: new Adapter() });

describe('Header - atom', () => {
  /**********************
   * Initialization
   **********************/

  // setup mock functions

  // setup initial props
  const props = {};
   

  // create a shallow or mounted copy
  const header = shallow(<Header {...props} />);

  /**********************
   * Tests
   **********************/

  /* Rendering Tests */
  describe('Rendering', () => {
    it('renders the header', () => {
      expect(header).toMatchSnapshot();
    });
  });

  // Event Tests
  describe('Event Handlers', () => {

  });

  // Prop Tests
  describe('Incoming Props', () => {
    
  });
});
import React from 'react';
/* eslint-disable */
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Footer from './Footer';

configure({ adapter: new Adapter() });

describe('Footer - atom', () => {
  /**********************
   * Initialization
   **********************/

  // setup mock functions

  // setup initial props
  const props = {};
   

  // create a shallow or mounted copy
  const footer = shallow(<Footer {...props} />);

  /**********************
   * Tests
   **********************/

  /* Rendering Tests */
  describe('Rendering', () => {
    it('renders the footer', () => {
      expect(footer).toMatchSnapshot();
    });
  });

  // Event Tests
  describe('Event Handlers', () => {

  });

  // Prop Tests
  describe('Incoming Props', () => {
    
  });
});
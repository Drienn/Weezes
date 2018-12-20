import React from 'react';
/* eslint-disable */
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import NotFound from './NotFound';

configure({ adapter: new Adapter() });

describe('NotFound - atom', () => {
  /**********************
   * Initialization
   **********************/

  // setup mock functions

  // setup initial props
  const props = {};
   

  // create a shallow or mounted copy
  const notFound = shallow(<NotFound {...props} />);

  /**********************
   * Tests
   **********************/

  /* Rendering Tests */
  describe('Rendering', () => {
    it('renders the notFound', () => {
      expect(notFound).toMatchSnapshot();
    });
  });

  // Event Tests
  describe('Event Handlers', () => {

  });

  // Prop Tests
  describe('Incoming Props', () => {
    
  });
});
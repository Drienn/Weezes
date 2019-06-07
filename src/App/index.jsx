import React from 'react';
// import PropTypes from 'prop-types';
import { withData } from 'App/withData';
import { Router } from '../components/router';
import 'App/App.css';

const App = () => (
  <div className="app">
    <Router />
    <div className="logo" />
  </div>
);

export default withData(App);

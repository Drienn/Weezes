import React from 'react';
// import PropTypes from 'prop-types';
import Router from 'components/router/';
import { withData } from 'App/withData';
import 'App/App.css';
import 'style/global.css';

const App = () => (
  <div className="app">
    <Router />
  </div>
);

export default withData(App);

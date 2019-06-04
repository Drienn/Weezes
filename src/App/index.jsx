import React from 'react';
import PropTypes from 'prop-types';
import Router from 'components/router/';
import { withData } from 'App/withData';
import 'App/App.css';
import 'style/global.css';

const App = ({ theme: { theme } }) => (
  <div className={`App ${theme}`}>
    <Router className="main" />
  </div>
);

App.propTypes = {
  theme: PropTypes.string,
};

App.defaultProps = {
  theme: '',
};

export default withData(App);

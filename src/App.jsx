import React from 'react';
import PropTypes from 'prop-types';
import Router from 'components/router/';
import { connect } from 'react-redux';

import * as Actions from './redux/actions';

import 'App.css';
import 'style/global.css';

const App = ({ theme }) => (
  <div className={`App ${theme}`}>
    <Router />
    <div className="main" />
    <div className="sidebar" />
    <div className="footer" />
  </div>
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

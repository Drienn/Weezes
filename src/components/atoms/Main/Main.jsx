import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';

const Main = ({ className }) => (
  <div className={`main-container ${className}`}>
    <h1 className="sec11">Main</h1>
  </div>
);

Main.propTypes = {
  className: PropTypes.string,
};

Main.defaultProps = {
  className: '',
};

export default Main;

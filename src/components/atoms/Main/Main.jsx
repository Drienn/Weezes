import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';

const Main = ({ className }) => (
  <div className={`main-container ${className}`}>
    <div className="main">
      <h1 className="">Main 1</h1>
      <div className="fillter" />
    </div>
  </div>
);

Main.propTypes = {
  className: PropTypes.string,
};

Main.defaultProps = {
  className: '',
};

export default Main;

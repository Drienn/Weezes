import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ className }) => (
  <div className={`footer-container ${className}`}>
    <h1>Footer</h1>
  </div>
);

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;

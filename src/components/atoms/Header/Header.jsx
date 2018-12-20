import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ className }) => (
  <div className={`header-container ${className}`}>
    <h1>Header</h1>
  </div>
);

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import Nav from '../Nav/Nav';

const Header = ({ className }) => (
  <div className={`header-container ${className}`}>
    <Nav />
    <h1>Weezies Whimsies</h1>
  </div>
);

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;

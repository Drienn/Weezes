import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <ul className="nav-container">
    <li>
      <NavLink to="/cart">Cart</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li className="dropdown">
      <NavLink to="/shop">Shop</NavLink>
      <div className="dropdown-content">
        <NavLink to="/shop/rings">Rings</NavLink>
        <NavLink to="/shop/bracelets">Bracelets</NavLink>
        <NavLink to="/shop/necklace">Necklaces</NavLink>
        <NavLink to="/shop/art">Art</NavLink>
      </div>
    </li>
    <li>
      <NavLink exact to="/">
        Home
      </NavLink>
    </li>
  </ul>
);

// Nav.propTypes = {};

// Nav.defaultProps = {};

export default Nav;

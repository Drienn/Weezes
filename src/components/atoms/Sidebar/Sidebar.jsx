import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

const Sidebar = ({ className }) => (
  <div className={`sidebar-container ${className}`}>
    <h2>Sidebar</h2>
  </div>
);

Sidebar.propTypes = {
  className: PropTypes.string,
};

Sidebar.defaultProps = {
  className: '',
};

export default Sidebar;

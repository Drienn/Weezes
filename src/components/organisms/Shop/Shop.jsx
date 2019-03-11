import React from 'react';
import PropTypes from 'prop-types';
import './Shop.css';

const Shop = ({ className }) => (
  <div className={`shop-container ${className}`}>
    <div className="main">
      <h1>Shop</h1>
    </div>
  </div>
);

Shop.propTypes = {
  className: PropTypes.string.isRequired,
};

// Shop.defaultProps = {};

export default Shop;

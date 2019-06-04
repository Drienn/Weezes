import React from 'react';
import { string, element } from 'prop-types';
import 'style/global.css';
import './Card.css';

const Card = ({
  headerText, color, className, children, size,
}) => (
  <div className={`card-container ${size} bg-brand-${color} ${className}`}>
    <h2 className="header-text">{headerText}</h2>
    {children}
  </div>
);

Card.propTypes = {
  headerText: string,
  color: string,
  className: string,
  size: string,
  children: element,
};

Card.defaultProps = {
  headerText: 'Card',
  color: '',
  className: '',
  size: 'small',
  children: <span />,
};

export default Card;

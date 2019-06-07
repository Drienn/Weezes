import React from 'react';
import { string, element } from 'prop-types';
import './Card.css';

const Card = ({
  title, right, color, className, children, size,
}) => (
  <div className={`card-container ${size} bg-brand-${color} ${className}`}>
    <div className="header">
      <h2 className="header-text">{title}</h2>
      {right}
    </div>
    <div className="body">{children}</div>
  </div>
);

Card.propTypes = {
  title: string,
  color: string,
  className: string,
  size: string,
  children: element,
  right: element,
};

Card.defaultProps = {
  title: 'Card',
  color: '',
  className: '',
  size: 'small',
  children: <span />,
  right: null,
};

export default Card;

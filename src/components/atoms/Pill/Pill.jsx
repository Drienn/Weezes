import React from 'react';
import { string, bool } from 'prop-types';
import './Pill.css';

const Pill = ({ text, color, disabled }) => (
  <div
    className={`pill-container bg-brand-${color} ${disabled ? 'disabled' : ''}`}
    disabled={disabled}
  >
    <span title={disabled ? 'disabled' : text} className="color-text">
      {text}
    </span>
  </div>
);

Pill.propTypes = {
  text: string,
  color: string,
  disabled: bool,
};

Pill.defaultProps = {
  text: '',
  color: '',
  disabled: false,
};

export default Pill;

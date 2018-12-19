import React from 'react';
import PropTypes from 'prop-types';
import './NewAtom.css';

const NewAtom = ({ className }) => (
  <div className={`new-atom-container ${className}`}>
    <h1>NewAtom</h1>
  </div>
);

NewAtom.propTypes = {
  className: PropTypes.string,
};

NewAtom.defaultProps = {
  className: '',
};

export default NewAtom;

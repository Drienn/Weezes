import React from 'react';
import { string, func } from 'prop-types';
import './Tile.css';

const Tile = ({ title, onClick }) => (
  <div className="tile-container" role="none" onClick={onClick}>
    <div className="contents">
      {/* <img style={{ height: 125, backgroundColor: 'grey' }}
    src="blah" alt={`${title} icon`} /> */}
      <div className="img-placeholder" src="blah" alt={`${title} icon`} />
      <h3>{title}</h3>
    </div>
  </div>
);

Tile.propTypes = {
  title: string,
  onClick: func,
};

Tile.defaultProps = {
  title: 'title',
  onClick: null,
};

export default Tile;

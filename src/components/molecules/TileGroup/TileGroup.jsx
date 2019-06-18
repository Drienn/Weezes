import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Card, Tile } from '../../atoms';
import './TileGroup.css';

const TileGroup = ({ title, tiles }) => (
  <div className="tile-group-container">
    <Card title={title} size="fit" color="accent-grey">
      <div className="titles-container">
        {tiles.map(tileProps => (
          <Tile
            key={tileProps.title}
            {...tileProps}
            onClick={() => console.log('clicked on ', tileProps.title)}
          />
        ))}
      </div>
    </Card>
  </div>
);

TileGroup.propTypes = {
  title: string,
  tiles: arrayOf(shape({ tileProps: shape({}) })),
};

TileGroup.defaultProps = {
  title: 'Home Purchase',
  tiles: [{}],
};

export default TileGroup;

import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Card } from '../../atoms';
import './CardGroup.css';

const CardGroup = ({ cardData, color }) => (
  <div className="card-group-container">
    {cardData.map(({
      title, right, body, size,
    }) => (
      <Card key={title} title={title} right={right} size={size} color={color}>
        {body}
      </Card>
    ))}
  </div>
);

CardGroup.propTypes = {
  cardData: arrayOf(shape({})),
  color: string,
};

CardGroup.defaultProps = {
  cardData: [],
  color: '',
};

export default CardGroup;

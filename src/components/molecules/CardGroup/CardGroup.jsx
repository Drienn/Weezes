import React from 'react';
import { array, string } from 'prop-types';
import { Card } from 'components/atoms';
import './CardGroup.css';

const CardGroup = ({ titles: [titleOne, titleTwo], bodies: [bodyOne, bodyTwo], color }) => (
  <div className="card-group-container">
    <Card headerText={titleOne} color={color}>
      {bodyOne}
    </Card>
    <Card headerText={titleTwo} color={color}>
      {bodyTwo}
    </Card>
  </div>
);

CardGroup.propTypes = {
  color: string,
  titles: array,
  bodies: array,
};

CardGroup.defaultProps = {
  color: '',
  titles: [],
  bodies: [],
};

export default CardGroup;

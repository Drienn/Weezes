import React from 'react';
import { array, string } from 'prop-types';
import { Card } from '../../atoms';
import './CardGroup.css';

const CardGroup = ({
  titles: [titleOne, titleTwo],
  rights: [rightOne, rightTwo],
  bodies: [bodyOne, bodyTwo],
  color,
}) => (
  <div className="card-group-container">
    <Card title={titleOne} right={rightOne} color={color}>
      {bodyOne}
    </Card>
    <Card title={titleTwo} right={rightTwo} color={color}>
      {bodyTwo}
    </Card>
  </div>
);

CardGroup.propTypes = {
  color: string,
  titles: array,
  bodies: array,
  rights: array,
};

CardGroup.defaultProps = {
  color: '',
  titles: [],
  bodies: [],
  rights: [],
};

export default CardGroup;

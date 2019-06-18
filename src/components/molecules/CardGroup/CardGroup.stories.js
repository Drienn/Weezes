import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import CardGroup from './CardGroup';
import ZipStatsBody from '../../atoms/Card/BodyTemplates/ZipStatsBody';

const cardDataOne = [
  { title: 'zip stats', right: <span>I'm on the right</span>, body: ZipStatsBody },
  {
    title: 'saved searches',
    right: <span>I'm on the right</span>,
    body: <span>For Body Two</span>,
  },
];
const cardDataTwo = [
  { title: 'coummunity', body: <span>For Body One</span> },
  { title: 'suggested recommendations', body: <span>For Body Two</span> },
];

storiesOf('Molecules/CardGroup', module)
  .addDecorator(story => (
    <div style={{ height: 500, width: '100%', margin: 20, padding: 20, backgroundColor: 'black' }}>
      {story()}
    </div>
  ))
  .add('Default', () => <CardGroup />)
  .add('Orange Group', () => <CardGroup cardData={cardDataOne} color="orange" />)
  .add('Blue Group', () => <CardGroup cardData={cardDataTwo} color="blue" />);

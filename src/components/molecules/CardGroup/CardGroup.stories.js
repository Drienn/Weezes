import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import CardGroup from './CardGroup';

storiesOf('Molecules/CardGroup', module)
  .addDecorator(story => (
    <div style={{ height: 500, width: '100%', margin: 20, padding: 20, backgroundColor: 'black' }}>
      {story()}
    </div>
  ))
  .add('Default', () => <CardGroup />)
  .add('Orange Group', () => <CardGroup titles={['zip stats', 'saved searches']} color="orange" />)
  .add('Blue Group', () => (
    <CardGroup
      titles={['coummunity', 'suggested recommendations']}
      color="blue"
      bodies={[<div>Hello from First Body!!</div>, <div>Second Body!</div>]}
    />
  ));

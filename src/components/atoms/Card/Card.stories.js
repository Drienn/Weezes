import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Atoms/Card', module)
  .addDecorator(story => (
    <div style={{ height: 500, width: 500, margin: 20, padding: 20, backgroundColor: 'black' }}>
      {story()}
    </div>
  ))
  .add('Default', () => <Card headerText="Card" />)
  .add('Background brand-orange', () => <Card headerText="zip stats" color="orange" />)
  .add('Background brand-blue', () => <Card headerText="community" color="blue" />)
  .add('Background brand-green', () => <Card headerText="top recommended" color="green" />);

import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import Card from './Card';
import { ZipStatsBody } from './BodyTemplates/';

storiesOf('Atoms/Card', module)
  .addDecorator(story => (
    <div style={{ height: 500, width: 500, margin: 20, padding: 20, backgroundColor: 'black' }}>
      {story()}
    </div>
  ))
  .add('Default', () => <Card title="Card" />)
  .add('Background brand-orange', () => (
    <Card title="zip stats" color="orange" size="small">
      {ZipStatsBody}
    </Card>
  ))
  .add('Background brand-blue', () => <Card title="community" color="blue" />)
  .add('Background brand-blue headerRight', () => (
    <Card title="community" color="blue" right={<span>Go Away meanie!</span>} />
  ))
  .add('Background brand-green', () => <Card title="top recommended" color="green" />)
  .add('Background brand-accent-grey', () => (
    <Card title="top recommended" color="accent-grey">
      I have children
    </Card>
  ));

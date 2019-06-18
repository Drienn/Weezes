import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import Tile from './Tile';

storiesOf('Atoms/Tile', module)
  .addDecorator(story => (
    <div style={{ height: 500, width: 900, margin: 20, padding: 20, backgroundColor: 'black' }}>
      {story()}
    </div>
  ))
  .add('Default', () => <Tile title="Real Estate Agents" />);

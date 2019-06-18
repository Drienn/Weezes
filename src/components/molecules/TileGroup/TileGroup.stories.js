import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import TileGroup from './TileGroup';

const tileData = [
  { title: 'Real Estate Agents' },
  { title: 'Lenders' },
  { title: 'Title & Escrow' },
  { title: 'Property Insurance' },
  { title: 'Home Warrenty' },
  { title: 'Real Estate Attourny' },
  { title: 'Home Inspector' },
];

storiesOf('Molecules/TileGroup', module).add('Default', () => (
  <TileGroup title="Home Purchase" tiles={tileData} />
));

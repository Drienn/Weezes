import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import Pill from './Pill';

storiesOf('Atoms/Pill', module)
  .addDecorator(story => (
    <div style={{ height: 500, width: 500, margin: 20, padding: 20, backgroundColor: 'grey' }}>
      {story()}
    </div>
  ))
  .add('Default', () => <Pill text="Accept" color="green" />)
  .add('disabled', () => <Pill text="Accept" color="green" disabled />)
  .add('plum button', () => <Pill text="Decline" color="plum" />);

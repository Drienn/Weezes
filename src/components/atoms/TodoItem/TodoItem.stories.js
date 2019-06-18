import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import TodoItem from './TodoItem';

storiesOf('Atoms/TodoItem', module)
  .addDecorator(story => (
    <div style={{ height: 500, width: 900, margin: 20, padding: 20, backgroundColor: 'black' }}>
      {story()}
    </div>
  ))
  .add('Default', () => <TodoItem title="Contact ABC PLUMING" />);

import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import TodoList from './TodoList';

const todoData = [
  { complete: false, title: 'Do something important' },
  { complete: false, title: 'Do something else' },
  { complete: true, title: 'Take out the trash' },
  { complete: false, title: 'Go to Disneyland!' },
];

storiesOf('Molecules/TodoList', module)
  .addDecorator(story => (
    <div style={{ height: 500, width: '100%', margin: 20, padding: 20, backgroundColor: 'black' }}>
      {story()}
    </div>
  ))
  .add('Default', () => <TodoList title="Custom To Do List:" todoData={todoData} />);

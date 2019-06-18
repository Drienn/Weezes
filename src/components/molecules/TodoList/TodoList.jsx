import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Card, TodoItem } from '../../atoms';

import './TodoList.css';

const TodoList = ({ title, todoData }) => (
  <div className="todo-list-container">
    <Card title={title} size="unset">
      {todoData.map(todoProps => (
        <TodoItem {...todoProps} />
      ))}
    </Card>
  </div>
);

TodoList.propTypes = {
  todoData: arrayOf(shape({})),
  title: string,
};

TodoList.defaultProps = {
  todoData: [],
  title: 'To Do List:',
};

export default TodoList;

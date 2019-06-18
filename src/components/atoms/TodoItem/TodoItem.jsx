import React from 'react';
import { string, bool } from 'prop-types';
import './TodoItem.css';

const TodoItem = ({ complete, title }) => (
  <div className="todo-item-container">
    <div className={`checkbox ${complete ? 'complete' : ''}`} />
    {title}
  </div>
);

TodoItem.propTypes = {
  complete: bool,
  title: string,
};

TodoItem.defaultProps = {
  complete: false,
  title: 'todo',
};

export default TodoItem;

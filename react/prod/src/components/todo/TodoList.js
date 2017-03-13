import React, {PropTypes} from 'react';
import {TodoItem} from './TodoItem';

export const TodoList = (props) => (
  <div>
    <ul className='list tl mw5 center'>
      {props.todos.map((todo, index) =>
        <TodoItem {...todo}
          handleToggle={props.handleToggle}
          handleRemove={props.handleRemove}
          key={index} />)}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

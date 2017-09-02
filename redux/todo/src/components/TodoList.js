import React from 'react'

const TodoItem = ({ name, isComplete }) =>
  <li>
    <input type="checkbox" checked={isComplete} /> {name}
  </li>

export default props =>
  <div>
    <ul>
      {props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
    </ul>
  </div>

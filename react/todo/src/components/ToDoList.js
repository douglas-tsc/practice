import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos }) => <div>{ todos.map((todo) => <ToDo key={todo.Id} text={todo.text} />) }</div>;

export default ToDoList;

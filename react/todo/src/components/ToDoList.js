import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos }) => <ol>
                                  {todos.map((todo) => <ToDo key={todos.id} {...todo} />)}
                                </ol>;
export default ToDoList;

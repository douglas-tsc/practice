import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos, onToggle }) => <ol>
                                            {todos.map((todo) => <ToDo key={todos.id} {...todo} onToggle={onToggle} />)}
                                          </ol>;
export default ToDoList;

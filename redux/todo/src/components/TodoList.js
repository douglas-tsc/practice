import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, toggleTodo, destroyTodo } from '../reducers/todo';

const TodoItem = ({ id, name, isComplete, toggleTodo, destroyTodo }) => (
  <li>
    <input
      type="checkbox"
      defaultChecked={isComplete}
      onChange={() => toggleTodo(id)}
    />{' '}
    {name}
    <button onClick={() => destroyTodo(id)}>X</button>
  </li>
);

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, index) => (
            <TodoItem
              key={index}
              {...todo}
              toggleTodo={this.props.toggleTodo}
              destroyTodo={this.props.destroyTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({ todos: state.todo.todos }), {
  fetchTodos,
  toggleTodo,
  destroyTodo
})(TodoList);

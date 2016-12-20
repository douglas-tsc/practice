import React, { Component } from 'react';
import ToDoList from './ToDoList';
import Add from './Add';
import Search from './Search';
import uuid from 'node-uuid';
import ToDoAPI from '../api/ToDoAPI.js';

class App extends Component {
  constructor () {
    super();
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: ToDoAPI.getToDos()
    };
    this.handleAddToDo = this.handleAddToDo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  componentDidUpdate () {
    ToDoAPI.setToDos(this.state.todos);
  }
  handleAddToDo (text) {
    this.setState({
      todos: [...this.state.todos,
        {
          id: uuid(),
          text,
          completed: false
        }
      ]
    });
  }
  handleSearch (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }
  handleToggle (id) {
    const updatedToDos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: updatedToDos
    });
  }
  render () {
    return (
      <div>
        <Search onSearch={this.handleSearch} />
        <ToDoList todos={this.state.todos} onToggle={this.handleToggle} />
        <Add onAddToDo={this.handleAddToDo} />
      </div>
    );
  }
}

export default App;

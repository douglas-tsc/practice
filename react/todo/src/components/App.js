import React, { Component } from 'react';
import ToDoList from './ToDoList';
import Add from './Add';
import Search from './Search';
import uuid from 'node-uuid';
import ToDoAPI from '../api/ToDoAPI.js';
import moment from 'moment';

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
          completed: false,
          completedAt: undefined
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
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });
    this.setState({
      todos: updatedToDos
    });
  }
  render () {
    let filteredToDos = ToDoAPI.filterToDos(this.state.todos, this.state.showCompleted, this.state.searchText);
    return (
      <div>
        <Search onSearch={this.handleSearch} />
        <ToDoList todos={filteredToDos} onToggle={this.handleToggle} />
        <Add onAddToDo={this.handleAddToDo} />
      </div>
    );
  }
}

export default App;

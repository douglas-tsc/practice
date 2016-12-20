import React, { Component } from 'react';
import ToDoList from './ToDoList';
import Add from './Add';
import Search from './Search';
import uuid from 'node-uuid';

class App extends Component {
  constructor () {
    super();
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        }, {
          id: uuid(),
          text: 'Clean the yard'
        }
      ]
    };
    this.handleAddToDo = this.handleAddToDo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleAddToDo (text) {
    this.setState({
      todos: [...this.state.todos,
        {
          id: uuid(),
        text}]
    });
  }
  handleSearch (showCompleted, searchText) {
    this.setState = {
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    };
  }
  render () {
    return (
      <div>
        <Search onSearch={this.handleSearch} />
        <ToDoList todos={this.state.todos} />
        <Add onAddToDo={this.handleAddToDo} />
      </div>
    );
  }
}

export default App;

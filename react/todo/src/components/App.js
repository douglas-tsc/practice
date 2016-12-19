import React, { Component } from 'react';
import ToDoList from './ToDoList';

class App extends Component {
  constructor () {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }
      ]
    };
  }
  render () {
    const { todos } = this.state;
    return (
      <div>
        <ToDoList todos={todos} />
      </div>
    );
  }
}

export default App;

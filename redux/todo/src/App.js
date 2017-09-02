import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TodoForm />
        </div>
        <TodoList todos={this.props.todos} />
        <div className="todo-app" />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Messages from './components/Messages'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Messages message="hello" />
        <TodoForm />
        <TodoList />
        <div className="todo-app" />
      </div>
    )
  }
}

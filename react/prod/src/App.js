import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList, Footer} from './components/todo';
import {addTodo, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './lib/todoHelpers';
import {pipe, partial} from './lib/utils';

class App extends Component {
  state = {
    todos: [],
    currentTodo: ''
  };

  static contextTypes = {
    route: React.PropTypes.string
  }

  handleRemove = (id, e) => {
    e.preventDefault()
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({todos: updatedTodos})
  }

  handleInputChange = (e) => {
    this.setState({
      currentTodo: e.target.value
    });
  }

  handleToggle = (id) => {
    console.log(id);

    // const todo = findById(id, this.state.todos);
    // const toggled = toggleTodo(todo);
    // const updatedTodos = updateTodo(this.state.todos, toggled);
    //is the same as...
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos) )

    const updatedTodos = getUpdatedTodos(id, this.state.todos);

    this.setState({todos: updatedTodos});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newId = new Date().getTime();
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false};
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    });
  }

  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo name'
    });
  }

  render () {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    const displayTodos = filterTodos(this.state.todos, this.context.route)
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>React ToDos</h2>
        </div>
        <div>
          {this.state.errorMessage && <span className='red'>{this.state.errorMessage}</span>}
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler}
           />
         <TodoList
           handleRemove={this.handleRemove}
           handleToggle={this.handleToggle} todos={displayTodos} />
         <Footer />
        </div>
      </div>
    );
  }
}

export default App;

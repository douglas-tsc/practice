import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCurrent, saveTodo } from '../reducers/todo'

class TodoForm extends Component {
  handleInputChange = e => {
    const val = e.target.value
    this.props.updateCurrent(val)
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.saveTodo(this.props.currentTodo)
  }
  render() {
    const { currentTodo } = this.props
    return (
      <form style={{ marginTop: '2rem' }} onSubmit={this.handleSubmit}>
        <input value={currentTodo} onChange={this.handleInputChange} />
      </form>
    )
  }
}

export default connect(
  state => ({
    currentTodo: state.todo.currentTodo
  }),
  { updateCurrent, saveTodo }
)(TodoForm)

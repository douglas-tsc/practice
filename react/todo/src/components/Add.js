import React, { Component } from 'react';

class Add extends Component {
  handleSubmit (e) {
    e.preventDefault();

    if (this.refs.toDoText.value.length > 0) {
      this.props.onAddToDo(this.refs.toDoText.value);
      this.refs.toDoText.value = '';
    } else {
      this.refs.toDoText.focus();
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type='text' ref='toDoText' />
          <button type='submit'>Add ToDo</button>
        </form>
      </div>
    );
  }
}

export default Add;

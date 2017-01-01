import React, { Component } from 'react';

class Input extends Component {
  onFormSubmit (e) {
    e.preventDefault();
    let location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    };
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input type='text' ref='location' />
        <button type='submit'>Get Weather</button>
      </form>
    );
  }
}

export default Input;

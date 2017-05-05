import React, { Component } from 'react';

class Counter extends Component {
  render () {
    return (
      <p>
        Clicked: {this.props.value} times
        {' '}
        <button onClick={this.props.add}>
          +
        </button>
        {' '}
        <button onClick={this.props.minus}>
          -
        </button>
      </p>
    );
  }
}

export default Counter;

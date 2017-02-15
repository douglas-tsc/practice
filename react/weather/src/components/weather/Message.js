import React, { Component } from 'react';

class Message extends Component {
  render () {
    return (
      <p>It is {this.props.temp} °C in {this.props.location}</p>
    );
  }
}

export default Message;

import React, { Component, PropTypes } from 'react';
import { database } from './firebase';

class Add extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.restaurantsRef = database.ref('/restaurants');
  }

  handleSubmit (e) {
    e.preventDefault();
    this.restaurantsRef.push({name: this.state.name});
    this.setState({
      name: ''
    });
  }

  handleChange (e) {
    this.setState({name: e.target.value});
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.name} onChange={this.handleChange} />
        <input type='submit' value='submit' />
      </form>
    );
  }
}

export default Add;

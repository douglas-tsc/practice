import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { database } from './firebase';

class NewRestaurant extends Component {
  constructor () {
    super();
    this.state = {
      name: ''
    };
    this.restaurantsRef = database.ref('/restaurants');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    this.restaurantsRef.push({name: this.state.name});
    this.setState({name: ''});
  }

  render () {
    const { name } = this.state;

    return (
      <form
        className='tc mv5'
      >
        <input
          type='text'
          className='input-reset pa3'
          value={name}
          placeholder='Suggest somewhere...'
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button
          onClick={this.handleSubmit}
          disabled={!name}
          className='pa3 bg-black white'
        >
          Submit
        </button>
      </form>
    );
  }
}

NewRestaurant.propTypes = {
  restaurantsRef: PropTypes.object
};

export default NewRestaurant;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import { database } from './firebase';

class Restaurants extends Component {

  static propTypes = {
    user: PropTypes.object,
    restaurantsRef: PropTypes.object,
    restaurants: PropTypes.object
  };

  handleSelect = (key) => {
    database.ref('/restaurants')
    .child(key)
    .child('votes')
    .child(this.props.user.uid)
    .set(this.props.user.displayName);
  }

  handleDeselect = (key) => {
    database.ref('/restaurants')
    .child(key)
    .child('votes')
    .child(this.props.user.uid)
    .remove();
  }

  render () {
    return (
      <section className='ma3 flex justify-around tc'>
        {map(this.props.restaurants, (restaurant, key) =>
          <Restaurant
            key={key} {...restaurant}
            handleSelect={() => this.handleSelect(key)}
            user={this.props.user}
            handleDeselect={() => this.handleDeselect(key)} />)}
      </section>
    );
  }
}

export default Restaurants;

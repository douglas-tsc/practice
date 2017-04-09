import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

class Restaurant extends Component {

  static propTypes = {
    name: PropTypes.string,
    votes: PropTypes.object,
    user: PropTypes.object,
    handleSelect: PropTypes.func,
    handleDeselect: PropTypes.func
  };

  render () {
    const userHasSelected = this.props.votes && Object.keys(this.props.votes)
    .includes(this.props.user.uid);
    return (
      <article className='Restaurant' >
        <h3>{this.props.name}</h3>
        <ul>
          { this.props.votes && map(this.props.votes, (vote, key) => <li key={key}>{vote}</li>)}
        </ul>
        {
          userHasSelected
          ? <button
            className='bg-red white' onClick={this.props.handleDeselect}>Nope, I take that back.</button>
          : <button className='bg-green black' onClick={this.props.handleSelect}>I'd go there</button>
        }
      </article>
    );
  }
}

export default Restaurant;

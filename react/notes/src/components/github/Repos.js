import React, { Component } from 'react';

class Repos extends Component {
  render () {
    return (
      <div>
        <div>Repo</div>
        <p>{this.props.repos}</p>
      </div>
    );
  }
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
};

export default Repos;

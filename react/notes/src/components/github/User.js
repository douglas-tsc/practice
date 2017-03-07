import React, { Component } from 'react';

class User extends Component {
  render () {
    return (
      <div>
        <div>User</div>
        <p>Username: {this.props.username}</p>
        <p>Bio: {this.props.bio.name}</p>
      </div>
    );
  }
}

User.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
};

export default User;

import React from 'react';
import AuthService from './utils/AuthService';

const auth = new AuthService('erkEIgY6SdjJWODOCH9sKomBr15dxp7Z', 'joshpitzalis.eu.auth0.com');

class Messages extends React.Component {
  constructor () {
    super();
    this.state = {
      privateMsg: 'hey',
      user: auth.getProfile()
    };
  }

  componentWillMount () {
    auth.fetch('http://localhost:3001/api/private')
      .then(response => this.setState({privateMsg: response.message}))
      .catch(error => this.setState({privateMsg: '' + error}));
  }

  render () {
    return (
      <div>
        <p>hello {this.state.user.nickname}</p>
        <p>User ID : {this.state.user.user_id}</p>
        <p>
          {this.state.privateMsg}
        </p>
      </div>
    );
  }
}

export default Messages;

import React from 'react';
import AuthService from './utils/AuthService';
import {Link} from 'react-router-dom';

const auth = new AuthService('erkEIgY6SdjJWODOCH9sKomBr15dxp7Z', 'joshpitzalis.eu.auth0.com');

class Messages extends React.Component {
  constructor () {
    super();
    this.state = {
      tutorials: [],
      user: auth.getProfile()
    };
  }

  componentWillMount () {
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(response =>
        this.setState({tutorials: response})
      );
  }

  render () {
    const tutorials = this.state.tutorials
    .filter(tut => tut.id === this.state.user.user_id)
    .map((tut, index) => <li key={index}>{tut.title}</li>);

    return (
      <div>
        <p>hello {this.state.user.nickname}</p>
        <Link to='/edit'><button>+ Add Tutorial</button></Link>
        <ul>
          {tutorials}
        </ul>
      </div>
    );
  }
}

export default Messages;

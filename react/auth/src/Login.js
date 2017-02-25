import React from 'react';
import {Redirect} from 'react-router-dom';
import AuthService from './utils/AuthService';

const auth = new AuthService('erkEIgY6SdjJWODOCH9sKomBr15dxp7Z', 'joshpitzalis.eu.auth0.com');

class Login extends React.Component {
  render () {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    console.log(from);
    if (auth.loggedIn()) {
      return (
        <Redirect to={from} />
      );
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={auth.login.bind(this)}>Log in</button>
      </div>
    );
  }
}

export default Login;

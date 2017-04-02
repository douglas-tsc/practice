import React from 'react';
import {Redirect} from 'react-router-dom';
import AuthService from './utils/AuthService';

const auth = new AuthService('erkEIgY6SdjJWODOCH9sKomBr15dxp7Z', 'joshpitzalis.eu.auth0.com');

class Login extends React.Component {
  render () {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    if (auth.loggedIn()) {
      return (
        <Redirect to={from} />
      );
    }

    return (
      <div className='tc'>
        <p>You must log in to view this page.</p>
        <button className='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black' onClick={auth.login.bind(this)}>Log in</button>
      </div>
    );
  }
}

export default Login;

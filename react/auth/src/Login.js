import React from 'react';
// import fakeAuth from './utils/fakeAuth';
import {Redirect} from 'react-router-dom';
import AuthService from './utils/AuthService';


const auth = new AuthService('erkEIgY6SdjJWODOCH9sKomBr15dxp7Z', 'joshpitzalis.eu.auth0.com');

class Login extends React.Component {

  state = {
    redirectToReferrer: false
  }

  login = () => {
    auth.login()
    auth.loggedIn(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {



    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login.bind(this)}>Log in</button>
      </div>
    )
  }
}

export default Login;

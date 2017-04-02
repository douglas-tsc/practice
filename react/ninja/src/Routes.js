import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import App from './App';

const realAuth = {
  isLoggedIn: false,
  authenticate () {
    fetch(`http://localhost:3001`, {
      method: 'GET',
      credentials: 'include'
    })
    .then(blob => blob.json())
    .then(res => {
      if (res.authenticated) {
        this.isLoggedIn = true;
      }
    });
  }
};

export default class Routes extends Component {
  render () {
    return (
      <Router>
        <div>
          <PrivateRoute exact path='/' component={App} />
          <Route path='/login' component={Login} />
        </div>
      </Router>
    );
  }
}

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    realAuth.isLoggedIn ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
);

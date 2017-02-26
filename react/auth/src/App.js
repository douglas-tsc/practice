import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import Login from './Login';
import Messages from './Messages';
import Profile from './Profile';
import Edit from './Edit';
import AuthService from './utils/AuthService';

const auth = new AuthService('erkEIgY6SdjJWODOCH9sKomBr15dxp7Z', 'joshpitzalis.eu.auth0.com');

const AuthExample = () => (
  <Router >
    <div>
      <AuthButton />
      <ul>
        <li><Link to='/public'>Home</Link></li>
        <li><Link to='/profile'>My Profile</Link></li>
      </ul>
      <Route exact path='/' component={Messages} />
      <Route path='/public' component={Messages} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/edit' component={Edit} />
      <PrivateRoute path='/profile' component={Profile} />
    </div>
  </Router>
);

const AuthButton = withRouter(({ push }) => (
  auth.loggedIn() ? (
    <p>
      <button onClick={() => {
        auth.logout(() => push('/'));
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
));

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.loggedIn() ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
);

export default AuthExample;

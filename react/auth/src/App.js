import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import Edit from './Edit';
import AuthService from './utils/AuthService';

const auth = new AuthService('erkEIgY6SdjJWODOCH9sKomBr15dxp7Z', 'joshpitzalis.eu.auth0.com');

const AuthExample = () => (
  <Router >
    <div>
      <nav className='pa3 pa4-ns bb b--black-10 mb6'>
        <a className='link dim black b f6 f5-ns dib mr3' href='#' title='Home'>MERN STACK TUTORIALS</a>
        <Link to='/public' className='link dim gray f6 f5-ns dib mr3'>Home</Link>
        <Link to='/profile' className='link dim gray f6 f5-ns dib mr3'>My Profile</Link>
        <AuthButton className='link dim gray f6 f5-ns dib mr3' />

      </nav>

      <Route exact path='/' component={Home} />
      <Route path='/public' component={Home} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/edit' component={Edit} />
      <PrivateRoute path='/profile' component={Profile} />
      <footer className='pv4 ph3 ph5-m ph6-l mid-gray bt b--black-10 mt6'>
        <small className='f6 db tc'>An <a href='https://github.com/aditya2337' class='ttu'>Aditya</a> and <a href='https://github.com/joshpitzalis' class='ttu'>Josh</a> production, No Rights Reserved.</small>
        <div className='tc mt3'>
          <p>If you find a bug, <a href='https://twitter.com/joshpitzalis' className='f6 dib ph2 link mid-gray dim'>let us know</a>.</p>
        </div>
      </footer>
    </div>
  </Router>
);

const AuthButton = withRouter(({ push }) => (
  auth.loggedIn() ? (

    <a className='link dim gray f6 f5-ns dib mr3' onClick={() => {
      auth.logout(() => push('/'));
    }}>Sign Out</a>

  ) : (
    <a className='link dim gray f6 f5-ns dib mr3' onClick={auth.login.bind(this)}>Sign Up</a>
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

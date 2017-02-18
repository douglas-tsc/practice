import React from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import fakeAuth from './Auth';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

const Routes = () => (
  <Router>
    <div>
      <Logout />
      <ul>
        <li><Link to='/public'>Public Page</Link></li>
        <li><Link to='/protected'>Protected Page</Link></li>
      </ul>
      <Route path='/public' component={Public} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/protected' component={Protected} />
    </div>
  </Router>
);

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
);

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

export default Routes;

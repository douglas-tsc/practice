import React
 from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

const AuthExample = () => (
  <Router>
    <div>
      <AuthButton/>
      <ul>
        <li><Link to="/public">Public Page</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
      </ul>
      <Route path="/public" component={Public}/>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected}/>
    </div>
  </Router>
)

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({ push }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  onFormSubmit (e) {
    e.preventDefault();
    const { email, password } = this.refs;
    fetch(`http://localhost:3001/login?email=${email.value}&password=${password.value}`, {
      credentials: 'include',
      method: 'post'
    })
      .then(blob => blob.json())
      .then(res =>
        {
        if (res.authenticated) {
          this.setState({
            redirectToReferrer: true,
          });
        }
      }
    )
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
          <form className='measure center mt4' onSubmit={this.onFormSubmit.bind(this)}>
            <div id='sign_up' class='ba b--transparent ph0 mh0'>
              <h1 className='f4 fw6 ph0 mh0 pb3'>You must log in to view the page at {from.pathname}</h1>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' for='email-address'>Email</label>
                <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='email' name='email-address' ref='email' />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6' for='password'>Password</label>
                <input className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='password' name='password' ref='password' />
              </div>
            </div>
            <div className=''>
              <input className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib' type='submit' value='Log in' />
            </div>
            <div className='lh-copy mt3'>
              <a href='#0' className='f6 link dim black db'>Sign up</a>
            </div>
          </form>
      </div>
    )
  }
}

export default AuthExample

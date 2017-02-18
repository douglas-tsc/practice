import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import fakeAuth from '../Auth';

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
    this.login = this.login.bind(this);
  }

  login = (e) => {
    e.preventDefault();
    const { username, password } = this.refs;
    fakeAuth.authenticate(username, password, () => {
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
          <form className='measure center mt4' onSubmit={this.login}>
            <div id='sign_up' className='ba b--transparent ph0 mh0'>
              <h1 className='f4 fw6 ph0 mh0 pb3'>Sign In</h1>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='email-address'>Email</label>
                <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='email' name='email-address' ref='username' />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6' htmlFor='password'>Password</label>
                <input className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='password' name='password' ref='password' />
              </div>
            </div>
            <div className=''>
              <input className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib' type='submit' value='Sign in' />
            </div>
            <div className='lh-copy mt3'>
              <a href='#0' className='f6 link dim black db'>Sign up</a>
            </div>
          </form>
      </div>
    )
  }
}

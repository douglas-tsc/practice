import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
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
          <form className='measure center mt4' onSubmit={this.login}>
            <div id='sign_up' className='ba b--transparent ph0 mh0'>
              <h1 className='f4 fw6 ph0 mh0 pb3'>You must Login to view mern.surge.sh{from.pathname}</h1>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='email-address'>Username</label>
                <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='text' name='username' ref='username' />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6' htmlFor='password'>Password</label>
                <input className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='password' name='password' ref='password' />
              </div>
            </div>
            <div className=''>
              <input className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib' type='submit' value='Login' />
            </div>
            <div className='lh-copy mt3'>
              <Link to='/signup' className='f6 link dim black db'>Sign up</Link>
            </div>
          </form>
      </div>
    )
  }
}

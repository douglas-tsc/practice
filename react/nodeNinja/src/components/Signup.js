import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import fakeAuth from '../Auth';

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
    this.signup = this.signup.bind(this);
  }

  signup = (e) => {
    e.preventDefault();
    const { username,password } = this.refs;
    fakeAuth.register(username, password, () => {
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
  <form onSubmit={this.signup} acceptCharset="utf-8" className='measure center mt4'>
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
      <h1 className='f4 fw6 ph0 mh0 pb3'>Sign Up</h1>
      <div className="mt3">
        <label className="db fw4 lh-copy f6" htmlFor="username">Username</label>
        <input className="pa2 input-reset ba bg-transparent w-100 measure hover-bg-black hover-white" type="text" name="username" ref='username' />
      </div>
      <div className="mt3">
        <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white" type="password" name="password"  id="password" ref='password' />
      </div>
    </fieldset>
    <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up" /></div>
      <div className='lh-copy mt3'>
        <Link to='/login' className='f6 link dim black db'>Login</Link>
      </div>
  </form>
    )
  }
}

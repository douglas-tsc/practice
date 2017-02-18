import React, { Component } from 'react';

class Login extends Component {

  render () {
    return (
      <form className='measure center mt4'>
        <div id='sign_up' class='ba b--transparent ph0 mh0'>
          <h1 className='f4 fw6 ph0 mh0 pb3'>Sign In</h1>
          <div className='mt3'>
            <label className='db fw6 lh-copy f6' for='email-address'>Email</label>
            <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='email' name='email-address' ref='username' />
          </div>
          <div className='mv3'>
            <label className='db fw6 lh-copy f6' for='password'>Password</label>
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
    );
  }
}

export default Login;

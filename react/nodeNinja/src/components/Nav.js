import React, { Component } from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';
import fakeAuth from '../Auth';

export default class Nav extends Component {
  render () {
    const AuthButton = withRouter(({ push }) => (
      fakeAuth.isAuthenticated ? (
        <a onClick={() => {
          fakeAuth.signout(() => push('/'));
        }} className='link dim white dib'>Logout</a>
      ) : (
        <span>
          <Link to='/login' className='link dim white dib mr3 ' title='Login'>Login</Link>
          <Link to='/signup' className='link dim white dib mr3' title='Store'>Sign Up</Link>
        </span>
      )
    ));

    return (
      <header className='bg-black-90 dib w-100 ph3 pv3 pv4-ns ph4-m ph5-l top-0 mb5'>
        <nav className='f6 fw6 ttu tracked tr'>
          <Link to='/' className='link dim white dib mr3 fl' title='Home'>MERN STACK TUTORIALS </Link>
          <AuthButton className='link dim white dib mr3 ' />
        </nav>
      </header>
    );
  }
}

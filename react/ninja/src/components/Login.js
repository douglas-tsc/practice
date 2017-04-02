import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // componentWillMount () {
  //   fetch(`http://localhost:3001`, {
  //     method: 'GET',
  //     credentials: 'include'
  //   })
  //     .then(blob => blob.json())
  //     .then(res => {
  //       if (res.authenticated) {
  //         this.setState({isLoggedIn: true});
  //       }
  //     });
  // }

  onFormSubmit (e) {
    e.preventDefault();
    const { username, password } = this.refs;
    fetch(`http://localhost:3001/login?username=${username.value}&password=${password.value}`, {
      credentials: 'include',
      method: 'post'
    })
      .then(blob => blob.json())
      .then(res => {
        if (res.authenticated) {
          return (
            <Redirect to='/' />
          );
        }
      });
  }

  render () {
    return (
      <div>
        <form className='measure center mt4' onSubmit={this.onFormSubmit}>
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
    );
  }
}

import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default class Edit extends Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     redirectToReferrer: false
  //   };
  //   this.login = this.login.bind(this);
  // }
  //
  // login = (e) => {
  //   e.preventDefault();
  //   const { username, password } = this.refs;
  //   fakeAuth.authenticate(username, password, () => {
  //     this.setState({ redirectToReferrer: true })
  //   })
  // }

  render () {
    return (
      <div>
        <form className='measure center mv4' onSubmit={this.login}>
          <div id='sign_up' className='ba b--transparent ph0 mh0'>
            <h1 className='f4 fw6 ph0 mh0 pb3'>EDIT TUTORIAL</h1>
            <div className='mt3'>
              <label className='db fw6 lh-copy f6' htmlFor='title'>Title</label>
              <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='text' name='title' ref='title' />
            </div>
            <div className='mv3'>
              <label className='db fw6 lh-copy f6' htmlFor='link'>Link</label>
              <input className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='password' name='link' ref='link' />
            </div>
            <div className='mv3'>
              <label for='comment' className='f6 b db mb2'>Comments <span className='normal black-60'>(optional)</span></label>
              <textarea id='comment' name='comment' className='db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2' aria-describedby='comment-desc' />
            </div>

            <fieldset id='favorite_movies' class='bn'>
              <legend className='fw7 mb2'>Type of Tutorial</legend>

              <div className='flex items-center mb2'>
                <input className='mr2' type='checkbox' id='mongo' value='mongo' />
                <label for='mongo' className='lh-copy'>Mongo</label>
              </div>
              <div className='flex items-center mb2'>
                <input className='mr2' type='checkbox' id='express' value='express' />
                <label for='express' className='lh-copy'>Express</label>
              </div>
              <div className='flex items-center mb2'>
                <input className='mr2' type='checkbox' id='react' value='react' />
                <label for='react' className='lh-copy'>React/Redux</label>
              </div>
              <div className='flex items-center mb2'>
                <input className='mr2' type='checkbox' id='node' value='node' />
                <label for='node' className='lh-copy'>Node</label>
              </div>
            </fieldset>
            <div className='mt3'>
              <img className='db ba b--black-10'
                alt='Frank Ocean Blonde Album Cover'
                src='https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg' />
              <br />
              <input className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib mr2' type='submit' value='Upload New Image' />
              <input className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib mr2' type='submit' value='Remove Image' />
            </div>
            <div className='mt3'>
              <label className='db fw6 lh-copy f6' htmlFor='title'>Working Demo</label>
              <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='text' name='title' ref='title' />
            </div>
            <div className='mv3'>
              <label className='db fw6 lh-copy f6' htmlFor='link'>Github Repo</label>
              <input className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='password' name='link' ref='link' />
            </div>
          </div>
          <div className=''>
            <input className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib' type='submit' value='Submit' />
          </div>
        </form>
      </div>
    );
  }
}

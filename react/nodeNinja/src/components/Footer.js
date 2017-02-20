import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default class Footer extends Component {
  render () {
    return (
      <footer className='bg-near-black white-80 pv5 pv6-l ph4'>
        <small className='f6 db tc'>Made with <span className='f3'> ☕️ </span><br />
        If you find a bug <a href='https://twitter.com/joshpitzalis' className='white'>let me know</a>.</small>
      </footer>
    );
  }
}

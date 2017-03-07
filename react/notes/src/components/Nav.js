import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render () {
    return (
      <header className='bg-black-90 db w-100 ph3 pv3 pv4-ns ph4-m ph5-l'>
        <nav className='f6 fw6 ttu tracked'>
          <Link className='link dim white dib mr3' to='/' title='Home'>Help Finder</Link>

        </nav>
      </header>
    );
  }
}

export default Nav;

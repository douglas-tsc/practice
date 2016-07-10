import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <nav classname='nav navbar-default'>
        <div className='navbar-header'>
          <a className='navbar-brand'>Markbin</a>
        </div>
        <ul className='nav navbar-nav'>
          <li>
            <a>Sign Up</a>
          </li>
          <li>
            <a>Create Bin</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;

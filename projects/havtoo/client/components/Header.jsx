import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
onCreateClick (event) {
  event.preventDefault();
  Meteor.call('projects.insert');
}
  render () {
    return (
      <nav className='nav navbar-default'>
        <div className='navbar-header'><Link to='/' className='navbar-brand'>Havtoo</Link>
        </div>
        <ul className='nav navbar-nav'>
          <li className=''>
            <a href='#' onClick={this.onCreateClick.bind(this)}>Create Project</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;

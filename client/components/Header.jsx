import React, { Component } from 'react';

class Header extends Component {
onCreateClick(event){
  event.preventDefault();
  Meteor.call('projects.insert');
}
  render () {
    return (
      <nav className='nav navbar-default'>
        <div className='navbar-header'><a className='navbar-brand'>Havtoo</a>
        </div>
        <ul className='nav navbar-nav'>
          <li className=''>
            <a href="#" onClick={this.onCreateClick.bind(this)}>Create Project</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;

import React, { Component } from 'react';

class Navbar extends Component {
  renderProductSearch () {
    return (
      <section className='left-side'>
        <input type='text' className='product-search' placeholder='search' />
      </section>
    );
  }
  renderProductLogo () {
    return (
      <a href='#'><img src='/img/favicon.ico' alt='' /></a>
    );
  }
  renderUser () {
    return (
      <section className='right-side'>
        <a href='#' className='login-btn'>Login</a>
      </section>
    );
  }
  render () {
    return (
      <section>
        <section className='navbar'>
          {this.renderProductSearch()}
          {this.renderProductLogo()}
          {this.renderUser()}
        </section>
      </section>
    );
  }
}

export default Navbar;

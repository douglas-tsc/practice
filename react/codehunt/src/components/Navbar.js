import React, { Component } from 'react';
import LoginPopup from './LoginPopup';
import PostPopup from './PostPopup';
import ProfileMenu from './ProfileMenu';

class Navbar extends Component {
  constructor () {
    super();
    this.state = {
      popupStatus: false
    };
  }
  showPopup = () => {
    this.setState({popupStatus: true});
    console.log('frog');
  };
  hidePopup = () => {
    this.setState({popupStatus: false});
    console.log('hidding frog');
  }
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
      {
        this.props.user
        ?
        <section>
          <span>
            <a href="#" onClick={this.showPopup} className="login-btn">POST</a>
            <ProfileMenu />
          </span>
          <PostPopup status={this.state.popupStatus} hidePopup={this.hidePopup} />
        </section>
        :
        <section>
          <a href='#' className='login-btn' onClick={this.showPopup}>LOGIN</a>
          <LoginPopup status={this.state.popupStatus} hidePopup={this.hidePopup} />
        </section>
      }
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

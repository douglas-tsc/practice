import React, { Component } from 'react';
import Popup from './Popup';

class LoginPopup extends Component {
  renderPopupContent () {
    return (
      <Popup {...this.props} style='login-popup'>
        <img src='/img/kitty.png' alt='' />
        <h1>Login to Join</h1>
        <p>
          A comunity that shares the latest cool stuff.
        </p>
        <button className='facebook-btn'>
          Login with Facebook
        </button>
        <p>
          We will never post without your permission.
        </p>
      </Popup>
    );
  }

  render () {
    return (
      <section>
        {this.props.status ? this.renderPopupContent() : null}
      </section>
    );
  }
}

export default LoginPopup;

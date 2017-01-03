import React, { Component } from 'react';
import Popup from './Popup';
import Firebase from 'firebase';

class LoginPopup extends Component {
  handleLogin = () => {
      var provider = new Firebase.auth.GithubAuthProvider();
      provider.addScope('public_profile');

      Firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;
        console.log('Login successfully!', user);
      }).catch(function(error) {
        console.log('Failed!', error);
      });
  };

  renderPopupContent () {
    return (
      <Popup {...this.props} style='login-popup'>
        <img src='/img/kitty.png' alt='' />
        <h1>Login to Join</h1>
        <p>
          A comunity that shares the latest cool stuff.
        </p>
        <button className='facebook-btn' onClick={this.handleLogin}>
          Login with Github
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

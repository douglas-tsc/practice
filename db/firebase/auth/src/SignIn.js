import React, {
  Component,
  PropTypes,
} from 'react';

import {
  auth, googleAuthprovider
} from './firebase';

export default class SignIn extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick={() => auth.signInWithPopup(googleAuthprovider)}>Sign In</button>
      </div>
    );
  }

}

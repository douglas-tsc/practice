import React, { Component } from 'react';
import SignIn from './SignIn';
import User from './User';

import { auth } from './firebase';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => { this.setState({currentUser}); });
  }
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          🥑
        </div>
        {!this.state.currentUser && <SignIn />}
        {this.state.currentUser && <User user={this.state.currentUser} />}
      </div>
    );
  }
}

export default App;

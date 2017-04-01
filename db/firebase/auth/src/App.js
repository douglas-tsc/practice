import React, { Component } from 'react';
import SignIn from './SignIn';
import {auth} from './firebase';
import CurrentUser from './CurrentUser';
import Add from './Add';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }
  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({currentUser});
    });
  }
  render () {
    return (
      <div className='flex x' >
        <div>
          <h2>Welcome to React</h2>
        </div>
        {this.state.currentUser ? <CurrentUser user={this.state.currentUser} /> : <SignIn />}
        <Add />
      </div>
    );
  }
}

export default App;

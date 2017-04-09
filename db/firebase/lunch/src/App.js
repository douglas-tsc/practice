import React, { Component } from 'react';
import SignIn from './SignIn';
import User from './User';
import NewRestaurant from './NewRestaurant';
import { auth, database } from './firebase';
import Restaurants from './Restaurants';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentUser: null,
      restaurants: null
    };
    this.restaurantsRef = database.ref('/restaurants');
  }

  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => { this.setState({currentUser}); });

    this.restaurantsRef.on('value', (snapshot) => {
      this.setState({restaurants: snapshot.val()});
    });
  }
  render () {
    return (
      <div className='flex flex-column'>
        <div className='tc mv5'>
        <h1>Where should we eat?</h1>
          <div>
            🥑
          </div>
        </div>
        <div className='center w5'>
        {!this.state.currentUser && <SignIn />}
        {this.state.currentUser && <User user={this.state.currentUser} />}
        </div>
        <NewRestaurant />
        <Restaurants restaurants={this.state.restaurants}
          user={this.state.currentUser} />
      </div>
    );
  }
}

export default App;

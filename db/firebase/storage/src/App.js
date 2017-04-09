import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import ProfileCard from './ProfileCard';
import pick from 'lodash/pick' ;
import map from 'lodash/map';

class App extends Component {
  state = {
    user: null,
    users: {}
  }

  constructor (props) {
    super(props);
    this.userRef = null;
    this.usersRef = null;
  }

  componentDidMount () {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });

        this.usersRef = database.ref('/users');
        this.userRef = this.usersRef.child(user.uid);

        this.userRef.once('value').then((snapshot) => {
          if (snapshot.val()) return;
          const userData = pick(user, ['displayName', 'photoURL', 'email']);
          this.userRef.set(userData);
        });

        this.usersRef.on('value', (snapshot) => {
          this.setState({ users: snapshot.val() });
        });
      }
    });
  }
  render () {
    return (
      <div className=''>
        <div className=''>
          <h2>Welcome to React</h2>
        </div>
        {this.state.user
        ? <div>
          <CurrentUser
            user={this.state.user} />
        </div>
        : <SignIn />
      }
        <section>
          { map(this.state.users, (user, uid) => {
            return <ProfileCard key={uid} user={user} uid={uid} />;
          })}
        </section>
      </div>
    );
  }
}

export default App;

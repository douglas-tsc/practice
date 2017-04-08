import React from 'react';
import {auth} from './firebase';

const User = ({user}) => (
  <div>
    <p>{user.displayName}</p>
    <img src={user.photoURL} alt={user.displayName} />
    <p>{user.email}</p>
    <button onClick={() => auth.signOut()}>Sign Out</button>
  </div>
);

export default User;

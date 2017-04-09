import React from 'react';
import {auth} from './firebase';

const User = ({user}) => (
  <div className='flex items-center flex-column'>
    <p className='ma0'>You are signed in as</p>
    <p className='mv1'>{user.displayName}</p>
    <button
      className='mv2'
      onClick={() => auth.signOut()}>Sign Out</button>
  </div>
);

export default User;

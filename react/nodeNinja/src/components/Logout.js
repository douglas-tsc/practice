import React from 'react';
import { withRouter } from 'react-router-dom';
import fakeAuth from '../Auth';

const AuthButton = withRouter(({ push }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => push('/'));
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
));

export default AuthButton;

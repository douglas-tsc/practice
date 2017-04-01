import React, { PropTypes } from 'react';
import { auth } from './firebase';

const CurrentUser = ({user}) => {
  return (
    <section className='tc pa3 pa5-ns flex x'>
      <article className='hide-child relative ba b--black-20 mw5 center'>
        {user.photoURL && <img src={user.photoURL} className='db' alt={user.displayName} />}
        <div className='pa2 bt b--black-20'>
          <a className='f6 db link dark-blue hover-blue' href='#'>{user.displayName}</a>
          <p className='f6 gray mv1'>{user.email}</p>
          <div className='link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1' onClick={() => auth.signOut()}>Sign Out</div>
        </div>
      </article>
    </section>
  );
};

CurrentUser.propTypes = {
  photoURL: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default CurrentUser;

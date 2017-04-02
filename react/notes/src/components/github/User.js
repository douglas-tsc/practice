import React from 'react';

const User = ({bio}) => (
  <article className='ba b--black-20 mw5 center'>
    {bio.avatar_url && <img src={bio.avatar_url} className='db center' alt={bio.name} />}
    <div className='pa2 bt b--black-20'>
      {bio.name && <a className='f6 db link dark-blue hover-blue' href='#'>{bio.name}</a>}
      {bio.followers && <p className='f6 gray mv1'>{bio.followers} Followers</p>}
      {bio.blog && <a className='link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1' href={bio.blog}>{bio.blog}</a>}
    </div>
  </article>
);

User.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
};

export default User;

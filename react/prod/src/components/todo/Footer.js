import React from 'react';
import {Link} from '../router';

export const Footer = (props) => {
  return (
    <div >
      <Link to='/'>All</Link>
      <br />
      <Link to='/active'>Active</Link>
      <br />
      <Link to='/complete'>Complete</Link>
    </div>
  );
};

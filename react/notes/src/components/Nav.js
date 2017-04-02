import React from 'react';
import Search from './Search';

const Nav = ({history}) => (
  <header className='bg-black-90 db w-100 ph3 pv3 pv4-ns ph4-m ph5-l'>
    <nav className='f6 fw6 ttu tracked'>
      <Search history={history} />
    </nav>
  </header>
    );

export default Nav;

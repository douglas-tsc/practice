import Navigation from '../navigation/index.jsx';
import React from 'react';

const Layout = ({content = () => null }) => (
  <div>
    <header>
    <h2>Your awesome web app</h2>
    <Navigation />
    </header>

    <div>
    {content()}
    </div>

    <footer>
    <small>Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> & Meteor.</small>
    </footer>
  </div>
);

export default Layout;

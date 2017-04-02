import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Profile from './components/Profile';

const App = () => (
  <div>
    <Route path='/' component={Nav} />
    <Route exact path='/' component={Home} />
    <Route path='/profile/:username' component={Profile} />
  </div>
    );

export default App;

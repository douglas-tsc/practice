import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Profile from './components/Profile';

class App extends Component {
  render () {
    return (
      <div>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={Home} />
        <Route path='/profile/:username' component={Profile} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Filesharer from './Filesharer';
import Video from './Video';

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <Video opts={{
          peerjs_key: 'jljaqy6e1anel8fr'
        }} />
      </div>
    );
  }
}
import React, { Component } from 'react';
import logo from './redux.svg';
import './App.css';
import Table from './components/YourTable';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>Restaurant Redux</h1>
        </div>
        <Table />
      </div>
    );
  }
}

export default App;

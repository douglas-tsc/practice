import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      users: [],
      tweets: []
    };
  }

  componentWillMount () {
    fetch(this.props.url)
 .then(blob => blob.json()).then(res => {
   this.setState({ title: res.title, users: res.users });
 });
  }

  render () {
    const users = this.state.users.map(data => <p>{data.username}</p>);
    console.log(this.state);
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>{this.state.title}</h2>
        </div>
        {users}
      </div>
    );
  }
}

export default App;

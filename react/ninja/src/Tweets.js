import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Tweets extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      tweets: []
    };
  }

  componentWillMount () {
    fetch(`http://localhost:3000${window.location.pathname}`)
  .then(blob => blob.json()).then(res => {
    this.setState({ title: res.title, tweets: res.tweets });
  });
  }

  render () {
    const tweets = this.state.tweets.map(data =>
      <li>{data.text}</li>);
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>{this.state.title}</h2>
        </div>
        <ul>{tweets}</ul>
      </div>
    );
  }
}

export default Tweets;

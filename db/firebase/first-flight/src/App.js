import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {database} from './firebase';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: null,
      newData: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount () {
    database.ref('/firstFlight').on('value', (snapshot) => {
      snapshot.key;
      this.setState({
        data: snapshot.val()
      });
    });
  }
  handleChange (e) {
    const newData = e.target.value;
    this.setState({ newData });
  }
  handleSubmit (e) {
    e.preventDefault();
    const newData = database.ref()
    .child('firstFlight')
    .set(this.state.newData);
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React & Firebase</h2>
        </div>
        <p className='App-intro'>
          {this.state.data || '...'} from firebase</p>
        <form className='flex col mw5 center' onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange}
            value={this.state.newData} />
          <input type='submit' value='submit' />
        </form>
      </div>
    );
  }
}

export default App;

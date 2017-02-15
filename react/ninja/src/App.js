import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tweets from './Tweets';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path='/' url='http://localhost:3000' component={App} />
      <Route path='/tweets/:user_Id' url='http://localhost:3000' component={Tweets} />
    </div>
  </Router>
);

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      users: []
    };
  }

  componentWillMount () {
    fetch(this.props.url)
 .then(blob => blob.json()).then(res => {
   this.setState({ title: res.title, users: res.users });
 });
  }

  render () {
    const users = this.state.users.map(data =>
      <li><Link to={`/tweets/${data.id}`}>{data.username}</Link></li>);
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>{this.state.title}</h2>
        </div>
        <ul>{users}</ul>

      </div>
    );
  }
}

export default BasicExample;

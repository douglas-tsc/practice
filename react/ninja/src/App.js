import React, { Component } from 'react';
import './App.css';

class App extends Component {

  handleLogout (e) {
    e.preventDefault();
    fetch(`http://localhost:3001/logout`, {
      method: 'GET',
      credentials: 'include'
    });
  }

  render () {
    return (
      <div className='App'>
        <p>Super secure top secret</p>
        <button onClick={this.handleLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Tweets from './Tweets';
// import Login from './Login';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
//
// class App extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       title: '',
//       users: []
//     };
//   }
//
//   componentWillMount () {
//     fetch('http://localhost:3001')
//  .then(blob => blob.json()).then(res => {
//    this.setState({ title: res.title, users: res.users });
//  });
//   }
//
//   render () {
//     const users = this.state.users.map(data =>
//       <li><Link to={`/tweets/${data.id}`}>{data.username}</Link></li>);
//     return (
//       <div className='App'>
//         <div className='App-header'>
//           <img src={logo} className='App-logo' alt='logo' />
//           <h2>{this.state.title}</h2>
//         </div>
//         <ul>{users}</ul>
//
//       </div>
//     );
//   }
// }
//
// const BasicExample = () => (
//   <Router>
//     <div>
//       <Route exact path='/' url='http://localhost:3000' component={App} />
//       <Route path='/tweets/:user_Id' url='http://localhost:3000' component={Tweets} />
//       <Route path='/login' url='http://localhost:3000' component={Login} />
//     </div>
//   </Router>
// );
//
// export default BasicExample;

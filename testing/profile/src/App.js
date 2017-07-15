import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    name: 'John Smith',
    imgURL: 'http://lorempixel.com/200/200/',
    hobbyList: ['coding', 'writing', 'skiing']
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Profile name={this.state.name} imgURL={this.state.imgURL} />
        <Hobbies hobbyList={this.state.hobbyList} />
      </div>
    )
  }
}

const Profile = ({ name, imgURL }) =>
  <div>
    <h3>
      {name}
    </h3>
    <img src={imgURL} alt={name} />
  </div>

const Hobbies = ({ hobbyList }) =>
  <div>
    <h5>My hobbies:</h5>
    <ul>
      {hobbyList.map((hobby, index) =>
        <li key={index}>
          {hobby}
        </li>
      )}
    </ul>
  </div>

export default App

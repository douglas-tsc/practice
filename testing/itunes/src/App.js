import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    searchResults: []
  }
  handleSearch = () => {
    fetch(
      `https://itunes.apple.com/search?term=${this.query
        .value}&country=us&entity=${this.category.value}`
    )
      .then(blob => blob.json())
      .then(data => this.setState({ searchResults: data.results }))
    // quick intro to fetch http://bit.ly/fetchintro
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <input type="text" ref={input => (this.query = input)} />
          <select ref={input => (this.category = input)}>
            <option value="software">Apps</option>
            <option value="movie">Films</option>
          </select>
          <input type="submit" onClick={this.handleSearch} />
        </div>
        <ul>
          {this.state.searchResults.map((result, index) =>
            <li key={index}>
              {result.trackName}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default App

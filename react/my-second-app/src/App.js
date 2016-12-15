import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class App extends Component {

  constructor () {
    super();
    this.state = {
      searchResults: []
    };
  }

  showResults (response) {
    this.setState({
      searchResults: response.results
    });
  }

  search (URL) {
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      url: URL,
      success: function (response) { this.showResults(response)}.bind(this)
    });
  }

  render () {
    return (
      <div >
        <SearchBox search={this.search} />
        <Results searchResults={this.state.searchResults} />
      </div>
    );
  }
}

class SearchBox extends Component {

  createAjax () {
    let query = this.query.value;
    let category = this.category.value;
    let URL = 'https://itunes.apple.com/search?term=' + query + '&country=us&entity=' + category;
    this.props.search(URL);
  }

  render () {
    return (
      <div >
        <input type='text' ref={(input) => this.query = input} />
        <select ref={(input) => this.category = input}>
          <option value='software'>Apps</option>
          <option value='movie'>Films</option>
        </select>
        <input type='submit' onClick={this.createAjax.bind(this)} />
      </div>
    );
  }
}

class Results extends Component {

  render () {
    var resultItems = this.props.searchResults.map((result) => {
      return <ResultItem key={result.trackId} trackName={result.trackName} />;
    });

    return (
      <ul>
        {resultItems}
      </ul>
    );
  }
}

class ResultItem extends Component {

  render () {
    return (
      <li>
        {this.props.trackName}
      </li>
    );
  }
}

export default App;

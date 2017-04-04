import React, { Component } from 'react';
import SearchBar from '../containers/Search';
import WeatherList from '../containers/WeatherList';

export default class App extends Component {
  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <div style={{marginTop: '4rem'}}>
          <p>Five Day Weather Forcast</p>
          <SearchBar />
          <WeatherList />
        </div>
      </div>
    );
  }
}

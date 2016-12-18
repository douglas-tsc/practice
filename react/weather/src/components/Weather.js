import React, { Component } from 'react';
import Input from './weather/Input';
import Message from './weather/Message';
import api from './api';

class Weather extends Component {
  constructor () {
    super ();
    this.state = {
      isLoading: false
    };
  }

  handleSearch (location) {
    var that = this;
    this.setState({ isLoading: true});
    api.getTemp(location).then(function (temp) {
      that.setState({
        location,
        temp,
        isLoading: false
      })
    }, function (errorMessage) {
      alert(errorMessage);
    });
  }

  render () {
    var {isLoading, temp, location} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <p>Fetching Weather...</p>;
      } else if (temp && location) {
        return <Message location={this.state.location}
        temp={this.state.temp} />;
      }
    }

    return (
      <div>
        <h2>Get Weather</h2>
        <Input onSearch={this.handleSearch.bind(this)} />
        {renderMessage()}
      </div>
    );
  }
}

export default Weather;

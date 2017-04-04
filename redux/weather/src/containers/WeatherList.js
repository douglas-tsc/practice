import React, {Component} from 'react';
import {connect} from 'react-redux';
import SparkLine from '../components/SparkLine';

class WeatherList extends Component {
  renderWeather (result) {
    const temp = result.list.map(weather => weather.main.temp);
    const pressure = result.list.map(weather => weather.main.pressure);
    const humidity = result.list.map(weather => weather.main.humidity);
    return (
      <tr key={result.city.name}>
        <td>{result.city.name}</td>
        <td>
          <SparkLine data={temp} colour='red' unit='° Celcius' />
        </td>
        <td>
          <SparkLine data={pressure} colour='black' unit='hPa' />
        </td>
        <td>
          <SparkLine data={humidity} colour='green' unit='percent' />
        </td>
      </tr>
    );
  }

  render () {
    return (
      <table style={{width: '100%', marginTop: '3rem'}}>
        <thead>
          <tr>
            <th>City</th>
            <th>Temp.</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps ({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);

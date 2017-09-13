import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import * as d3 from 'd3'
import DynamicChart from './DynamicChart'
import DecimalChart from './DecimalChart'

class App extends Component {
  componentDidMount() {
    const data = [90, 70, 50, 30, 10]
    d3
      .select(`#chart`)
      .selectAll(`div`)
      .data(data)
      .enter()
      .append(`div`)
      .attr(`class`, `bar`)
      .style(`width`, d => `${d}px`)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <DecimalChart />
          <DynamicChart />
          <div id="chart" className="h5 w5 center" />
        </p>
      </div>
    )
  }
}

export default App

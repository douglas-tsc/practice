import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './App.css'
import d3 from 'd3'

class App extends Component {
  constructor(props) {
    super(props)
    this.colors = d3.schemeCategory20
    this.width = d3.scaleBand().domain(d3.range(20))
  }

  componentDidMount() {
    ReactDOM.render(<Colors width="400" />, document.getElementById('svg'))
  }

  componentWillMount() {
    this.updateD3(this.props)
  }

  componentWillUpdate(newProps) {
    this.updateD3(newProps)
  }

  updateD3(props) {
    this.width.range([0, props.width])
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <g>
          {d3
            .range(20)
            .map(i =>
              <Swatch
                color={this.colors[i]}
                width={this.width.step()}
                x={this.width(i)}
                y="0"
              />
            )}
        </g>
      </div>
    )
  }
}

const Swatch = ({ color, width, x }) =>
  <rect width={width} height="20" x={x} y="0" style={{ fill: color }} />

export default App

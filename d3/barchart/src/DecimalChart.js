import React, { Component } from 'react'
import * as d3 from 'd3'
import './App.css'

export default class extends Component {
  state = {
    data: [
      { name: 'Alice', math: 93, science: 84 },
      { name: 'Bobby', math: 81, science: 97 },
      { name: 'Carol', math: 74, science: 88 },
      { name: 'David', math: 64, science: 76 },
      { name: 'Emily', math: 80, science: 94 }
    ]
  }

  componentDidMount() {
    const width = 600
    const height = 400
    const svg = d3
      .select('#chart3')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('position', 'absolute')
      .style('top', 0)
  }

  rend = subject => {
    d3.select(`#chart3`).selectAll(`div`).remove()

    const width = 600
    const height = 400

    // create a scale to map scores to bar widths
    // test scores are stored as percentages
    // a score of 100 should create a full-width bar
    const xScale = d3.scaleLinear().domain([0, 100]).range([0, width])

    const yScale = d3
      .scaleBand()
      .domain(this.state.data.map(d => d.name))
      .range([0, height])

    d3
      .select(`#chart3`)
      .selectAll(`div`)
      .data(this.state.data)
      .enter()
      .append(`div`)
      .attr('class', `bar`)
      .style(`width`, d => xScale(d[subject]) + 'px')
      .style('height', d => yScale.bandwidth() + 'px')
  }

  render() {
    return (
      <div className="h5 w5 center">
        <div id="chart3" />
        <button onClick={() => this.rend('math')}>Math</button>
        <button onClick={() => this.rend('science')}>Science</button>
      </div>
    )
  }
}

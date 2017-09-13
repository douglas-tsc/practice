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

  rend = subject => {
    d3.select(`#chart2`).selectAll(`div`).remove()

    d3
      .select(`#chart2`)
      .selectAll(`div`)
      .data(this.state.data)
      .enter()
      .append(`div`)
      .attr('class', `bar`)
      .style(`width`, d => d[subject] + 'px')
  }

  render() {
    return (
      <div className="h5 w5 center">
        <div id="chart2" />
        <button onClick={() => this.rend('math')}>Math</button>
        <button onClick={() => this.rend('science')}>Science</button>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Wallet from './Wallet'

export default class App extends Component {
  render () {
    return (
      <div>
        <h2>Loot</h2>
        <hr />
        <Wallet />
      </div>
    )
  }
}

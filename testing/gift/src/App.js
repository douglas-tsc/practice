import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    gifts: []
  }
  addGift = () => {
    const { gifts } = this.state
    const ids = this.state.gifts.map(gift => gift.id)
    const max_id = ids.length > 0 ? Math.max(...ids) : 0
    gifts.push({ id: max_id + 1 })
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Gift Giver</h1>
        </header>
        <button data-test='addButton' onClick={this.addGift}>
          Add
        </button>
      </div>
    )
  }
}

export default App

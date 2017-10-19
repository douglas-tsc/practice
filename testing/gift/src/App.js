import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Gift from './components/Gifts/Gifts'
import { max_number } from './helpers'

class App extends Component {
  state = {
    gifts: []
  }
  addGift = () => {
    const { gifts } = this.state
    gifts.push({
      id: max_number(this.state.gifts.map(gift => gift.id)) + 1
    })
    this.setState({ gifts })
  }

  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id)
    this.setState({ gifts })
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
        <ul data-test='addList'>
          {this.state.gifts &&
            this.state.gifts.map(gift => (
              <li key={gift.id}>
                <Gift id={gift.id} removeGift={this.removeGift}>
                  {gift.id}
                </Gift>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

export default App

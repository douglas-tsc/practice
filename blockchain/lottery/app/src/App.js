// @title Frontend for a lottery contract
// @author Josh

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3.js';
//   @dev this is a local file web3 not the web3 library

import lottery from './lottery.js';

class App extends Component {
  state = {
    manager: '',
    players: [],
    balance: '',
    value: 0
  };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    this.setState({ manager, players, balance });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    this.setState({ message: 'Waiting on transaction success...' });
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });
    this.setState({
      message: 'You have been successfully entered into the lottery.'
    });
  };

  pickWinner = async () => {
    const accounts = await web3.eth.getAccounts();
    this.setState({ message: 'Waiting on transaction success...' });
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });
    this.setState({
      message: 'A winner has been picked.'
    });
  };

  render() {
    return (
      <div>
        <h1>Lottery Contract</h1>
        <p>This contract is managed by {this.state.manager}</p>
        <p>
          There are currently {this.state.players.length} players competing to
          win {web3.utils.fromWei(this.state.balance, 'ether')} ETH.
        </p>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <h2>Want to try your luck?</h2>
          <label htmlFor="value">
            Amount of ether to enter{' '}
            <input
              type="number"
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value })}
            />
          </label>
          <input type="submit" value="Enter" />
        </form>
        <hr />
        <p>{this.state.message}</p>
        <hr />
        <p>Ready to pick a winner?</p>
        <button onClick={this.pickWinner}>Pick a Winner</button>
      </div>
    );
  }
}

export default App;

// @title A lottern contract
// @author Josh
//   @notice
/// @dev String comparison may be inefficient
/// @param _food The name of a food to evaluate (English)
/// @return true if Bugs will eat it, false otherwise

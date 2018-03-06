const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile');

let accounts;
let lottery;

// @title tests for a lottery contract
// @author Josh

beforeEach(async () => {
  //   @notice Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  //   @notice Use one of the accounts to deploy the contract
  lottery = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode
    })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Lottery contract', () => {
  it('deploys a contract', () => {
    //   @notice it deploys a contract
    assert.ok(lottery.options.address);
    // console.log('inbox', inbox);
  });

  it('allows one account to enter', async () => {
    const message = await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('0.02', 'ether')
    });

    const players = await lottery.methods
      .getPlayers()
      .call({ from: accounts[0] });

    assert.equal(accounts[0], players[0]);
    assert.equal(1, players.length);
  });

  it('allows multiple accounts to enter', async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('0.02', 'ether')
    });

    await lottery.methods.enter().send({
      from: accounts[1],
      value: web3.utils.toWei('0.02', 'ether')
    });

    await lottery.methods.enter().send({
      from: accounts[2],
      value: web3.utils.toWei('0.02', 'ether')
    });

    const players = await lottery.methods
      .getPlayers()
      .call({ from: accounts[0] });

    assert.equal(accounts[0], players[0]);
    assert.equal(accounts[1], players[1]);
    assert.equal(accounts[2], players[2]);
    assert.equal(3, players.length);
  });

  it('requires a minimum amount of ether to enter', async () => {
    try {
      await lottery.methods.enter().send({ from: accounts[0], value: 0 });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('only a manager can call pick winner', async () => {
    try {
      await lottery.methods.pickWinner().send({ from: accounts[1] });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('picks a winner and resets contract state', async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('2', 'ether')
    });
    const initialBalance = await web3.eth.getBalance();
    await lottery.methods.pickWinner().send({ from: accounts[0] });
    const finalBalance = await web3.eth.getBalance();

    const difference = finalBalance - initialBalance;
    assert(difference > web3.utils.toWei('1.8', 'ether'));
  });
});

// @dev String comparison may be inefficient
// @param _food The name of a food to evaluate (English)
// @return true if Bugs will eat it, false otherwise

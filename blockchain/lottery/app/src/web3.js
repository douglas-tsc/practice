// @title replaces out client web3 with the provider from metamask
// @author Josh

const Web3 = require('web3');
const web3 = new Web3(window.web3.currentProvider);

export default web3;

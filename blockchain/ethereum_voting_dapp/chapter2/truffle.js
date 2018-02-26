// // Allows us to use ES6 in our migrations and tests.
// require('babel-register')

// module.exports = {
//   networks: {
//     development: {
//       host: '127.0.0.1',
//       port: 7545,
//       network_id: '*' // Match any network id
//     }
//   }
// }

require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 4612388,
      from: '0x3a880d6d13a3c12e94ad7d52a060969aeb352dbd'
    }
  }
}

// from: '0x3a880d6d13a3c12e94ad7d52a060969aeb352dbd'
// web3.eth.getBalance('0x3a880d6d13a3c12e94ad7d52a060969aeb352dbd')
// web3.personal.unlockAccount('0x3a880d6d13a3c12e94ad7d52a060969aeb352dbd', 'verystrongpassword', 15000)

// from: '0x159b7967decea898b78a8feab4c02fe6d31c1c9b'
// web3.eth.getBalance('0x159b7967decea898b78a8feab4c02fe6d31c1c9b')
// web3.personal.unlockAccount('0x159b7967decea898b78a8feab4c02fe6d31c1c9b', 'verystrongpassword', 15000)

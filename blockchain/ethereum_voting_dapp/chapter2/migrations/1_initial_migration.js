var Migrations = artifacts.require('./Migrations.sol')

module.exports = function (deployer) {
  deployer.deploy(Migrations)

  // deployer.deploy(MyContract, startTime, endTime, wallet, { gas: 4712388 });
}
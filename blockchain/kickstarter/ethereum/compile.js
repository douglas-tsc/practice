const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');
// const fs = require('fs');

const buildPath = path.resolve(__dirname, 'build');

fs.removeSync(buildPath);
// @notice above removes the build folder if it exists
const campaignPath = path.resolve(__dirname, 'contracts', 'campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;
// console.log('output', output);
fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}

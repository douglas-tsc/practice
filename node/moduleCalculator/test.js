var assert = require('assert');
var math = require('./math');

assert(math.add(3, 4) === 7);
assert(math.multiply(3, 2) === 6);
assert(math.subtract(14, 4) === 10);
assert(math.divide(30, 10) === 3);

console.log('all tests passed')

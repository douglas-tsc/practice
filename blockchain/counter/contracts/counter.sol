pragma solidity ^0.4.16;

contract Counter {
  uint count;

  function Counter() {
    count = 1;
  }

  function increment() {
    count = count + 1;
  }

  function get() view returns (uint) {
    return count;
  }
}

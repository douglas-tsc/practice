pragma solidity ^0.4.16;

contract MillionEtherPage {
  bytes3[1000][1000] public pixels;
  function colorPixel(uint x, uint y, bytes3 color) {
    pixels[x][y] = color;
  }
}
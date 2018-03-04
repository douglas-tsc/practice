pragma solidity ^0.4.16;

contract MillionEtherPage {
    
    struct Pixel {
        address owner;
        uint soldPrice;
        bytes3 color;
    }
  Pixel[1000][1000] public pixels;
  
  event PixelChanged( 
      uint x, 
      uint y,  
      address owner,
      uint soldPrice, 
      bytes3 color 
    );
  
  function colorPixel(uint x, uint y, bytes3 color) public {
    Pixel storage pixel = pixels[x][y];
    require(msg.value > pixel.soldPrice);
    pixel.owner = msg.sender;
    pixel.soldPrice = msg.value;
    pixel.color = color;
    PixelChanged(x, y, color);
  }
}

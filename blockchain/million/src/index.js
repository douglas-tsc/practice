let app = document.querySelector('#app');

app.innerHTML = `<h2>Welcome to million-ether-page</h2><canvas id='canvas' width='1000' height='1000'></canvas>`;

// first we'll require web3
var Web3 = require('web3');
// next we'll create a new instance of web3.
var web3 = new Web3();

// Set the provider
web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));

const abi = require('./MillionEtherPage.abi.json');
const mepAddress = '0x73E245370be08CD2F805161334B9faB33F090d29';

let mep = new web3.eth.Contract(abi, mepAddress);

function checkBalance() {
  web3.eth.personal.getAccounts().then(accounts => {
    console.log('accounts', accounts);

    web3.eth.getBalance(accounts[0]).then(balance => {
      console.log('balance[0]', balance);
    });
  });
}
// src/steps/001-basic-canvas-test.js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imageData.data;

    function parseColor(rawColor) {
      let rgb = [];
      for (let i = 0; i < rawColor.length; i += 2) {
        let chunk = rawColor.substring(i, i + 2);
        if (chunk !== '0x') {
          rgb.push(parseInt(chunk, 16).toString(10));
        }
      }
      return rgb;
    }

    function writePixel(x, y, color) {
      console.log(x, y, color);

      // grab the existing image data
      let data = imageData.data;

      // notice that canvas is in scope here
      let columns = canvas.width;
      let rows = canvas.height;

      // Now, finding the index is a little tricky, because the image data is a
      // one-dimensional array.
      //
      // How do we find the index in a one-dimensional array? First we'll take the
      // y-value times the number of columns plus the x value, times 4. Why four?
      // Because we have one byte per channel per pixel.
      //
      // If that seems confusing, try to work it out on paper, but honestly
      // understanding the layout of this image array it's not that crucial to building
      // this app. This _is_ how you find the index.

      let i = (y * columns + x) * 4;

      // Now we will assign the pixel in data each channel of our pixel in color.
      data[i] = color[0];
      data[i + 1] = color[1];
      data[i + 2] = color[2];

      // I want every pixel to be opaque, that is, no transparency, so I'll set the
      // alpha channel to 255. If you don't do this, your pixels will be invisible.
      data[i + 3] = 255; // alpha

      // And lastly, we put the image data back into the canvas.
      // You might see this and realize that we're rewriting the canvas on every pixel.
      // You could certainly batch these updates, but we're not going to, just for
      // simplicity.
      ctx.putImageData(imageData, 0, 0);
    }

    function writePixelWithEvent(event) {
      let { x, y, color } = event.returnValues;
      writePixel(parseInt(x), parseInt(y), parseColor(color));
    }

    mep.getPastEvents(
      'PixelChanged',
      {
        fromBlock: 0
        // toBlock: 1200
      },
      function(error, events) {
        console.log('event : ', events);

        events.map(e => writePixelWithEvent(e));
      }
    );

    mep.events.PixelChanged(
      {
        fromBlock: 0
      },
      function(error, event) {
        console.log('new event : ', event);
        writePixelWithEvent(event);
      }
    );

    // for (var i = 0; i < data.length; i += 4) {
    //   data[i] = i % 255; // red
    //   data[i + 1] = i % 255; // green
    //   data[i + 2] = i % 255; // blue
    //   data[i + 3] = i % 255;

    //   //   let rnd = () => parseInt((Math.random() * 1000) % 255);
    //   //   data[i] = rnd(); // red
    //   //   data[i + 1] = rnd(); // green
    //   //   data[i + 2] = rnd(); // blue
    //   //   data[i + 3] = 255;
    // }
    // ctx.putImageData(imageData, 0, 0);
  }
}

document.body.onload = function() {
  draw();
  checkBalance();
};

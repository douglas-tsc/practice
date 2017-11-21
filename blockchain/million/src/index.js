var Web3 = require('web3');

var web3 = new Web3();

web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));

function checkBalance() {
  web3.eth.personal.getAccounts().then(accounts => {
    console.log('acc', accounts);

    web3.eth.getBalance(accounts[0]).then(balance => {
      console.log('bal[0]', balance);
    });
  });
}

function draw() {
  let canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
      data[i + 0] = i % 255;
      data[i + 1] = i % 255;
      data[i + 2] = i % 255;
      data[i + 3] = i % 255;
    }
    ctx.putImageData(imageData, 0, 0);
  }
}

document.body.onload = function() {
  draw();
  checkBalance();
};

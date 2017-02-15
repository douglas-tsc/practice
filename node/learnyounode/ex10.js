const net = require('net');

const server = net.createServer(function listener (socket) {
  let month = new Date().getMonth().toString().length < 2 ? '0' + (+new Date().getMonth() + 1) : +new Date().getMonth() + 1;
  let day = new Date().getDate().toString().length < 2 ? '0' + new Date().getDate() : new Date().getDate();
  socket.end(`${
    new Date().getFullYear()}-${
    month}-${
    day} ${
    new Date().getHours()}:${
    new Date().getMinutes()}\n`);
});

server.listen(process.argv[2]);

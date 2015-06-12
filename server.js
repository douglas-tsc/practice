var http = require('http');
var fs = require('fs');
var index = fs.readFileSync(__dirname + '/index.html');
var page1 = fs.readFileSync(__dirname + '/page1.html');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);


  if (url.length === 1) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(page1);
  }

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

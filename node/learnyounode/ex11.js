const http = require('http');
var fs = require('fs');

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  fs.createReadStream(process.argv[3]).pipe(response);
});

server.listen(process.argv[2]);

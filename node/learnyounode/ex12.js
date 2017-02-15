const http = require('http');
var fs = require('fs');
var map = require('through2-map');

const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    request.pipe(map(chunk => {
      return chunk.toString().toUpperCase();
    })).pipe(response);
  }
});

server.listen(process.argv[2]);

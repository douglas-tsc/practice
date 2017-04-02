const http = require('http');
const url = require('url');

http.createServer((request, response) => {
  const path = url.parse(request.url, true);
  const time = path.query.iso;
  let result;

  if (path.pathname === '/api/unixtime') {
    result = {
      unixtime: Date.parse(time)
    };
  }

  if (path.pathname === '/api/parsetime') {
    var date = new Date(Date.parse(time));
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  }

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(result));
}).listen(process.argv[2]);

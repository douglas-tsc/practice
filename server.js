var http = require('http');

function handleRequest(request, response){
  response.end('You server is working on ' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(8000, function(){
  console.log("You server is listening on http://localhost:8000");
});

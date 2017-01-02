import http from 'http';
import { homepage, notFound } from './handlers';

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    homepage(request, response);
  } else {
    notFound(request, response);
  }
});

server.listen(3000);

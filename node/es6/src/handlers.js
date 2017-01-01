export function homepage(request, response) {
  response.setHeader('Content-Type', 'text/html');
  response.end('hello World');
}

export function notFound(request, response) {
  response.setHeader('Content-Type', 'text/html');
  response.end('404');
}

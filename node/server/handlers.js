exports.homepage = function (request, response) {
  response.setHeader('content-type', 'text/html');
  response.end('<h1>Hello World</h1>');
};

exports.profile = function (request, response) {
  var profile = {
    name: 'Josh',
    age: 35,
  };
  response.setHeader('content-type', 'application/json');
  response.end(JSON.stringify(profile));
};

exports.notFound = function (request, response) {
  response.statusCode = 404;
  response.setHeader('content-type', 'text/html');
  response.end('<h1>404 | Page Not Found</h1>');
};

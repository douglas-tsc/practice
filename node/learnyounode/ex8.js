var http = require('http');
var bl = require('bl');

http.get(process.argv[2], response => {
  response.pipe(bl((err, data) => {
    if (err) throw err;
    console.log(data.toString().length);
    console.log(data.toString());
  }));
});

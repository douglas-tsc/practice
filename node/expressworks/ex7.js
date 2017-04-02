const express = require('express');
const app = express();

app.get('/search', function (req, res) {
  var query = req.query;
  res.send(query);
});

app.listen(process.argv[2]);

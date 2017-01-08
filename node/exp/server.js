const express = require('express');
const app = express();
const users = require('./routes/users.js');
const bodyParser = require('body-parser');

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use('/users', users);

app.listen(3000);

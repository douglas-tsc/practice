var express = require('express');
var app = express();
var jwt = require('express-jwt');
require('dotenv').config();
var cors = require('cors');
const mongo = require('./db');

if (!process.env.AUTH0_CLIENT_ID || !process.env.AUTH0_SECRET) {
  throw 'Make sure you have AUTH0_CLIENT_ID and AUTH0_SECRET in your .env file';
}

// const origin = 'http://mern.surge.sh';
const origin = 'http://localhost:3000';

var authenticate = jwt({
  secret: process.env.AUTH0_SECRET,
  audience: process.env.AUTH0_CLIENT_ID
});

app.use(cors());
app.get('/', function (req, res) {
  mongo.find({}, (err, tutorials) => {
    res.json(tutorials);
  });
});

app.get('/api/public', function (req, res) {
  // res.header('Access-Control-Allow-Origin', origin);
  // res.header('Access-Control-Allow-Credentials', true);
  // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.json({ message: "Hello from a public endpoint! You don't need to be authenticated to see this." });
});

app.get('/api/private', authenticate, function (req, res) {
  res.json({ message: 'Hello from a private endpoint! You DO need to be authenticated to see this.' });
});

app.post('/api/private', authenticate, function (req, res) {
  res.json({ message: 'Hello from a private endpoint! You DO need to be authenticated to see this.' });
});

app.listen(3001);

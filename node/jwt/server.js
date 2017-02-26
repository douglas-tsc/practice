const express = require('express');
const app = express();
const jwt = require('express-jwt');
require('dotenv').config();
const cors = require('cors');
const mongo = require('./db');
const bodyParser = require('body-parser');

if (!process.env.AUTH0_CLIENT_ID || !process.env.AUTH0_SECRET) {
  throw 'Make sure you have AUTH0_CLIENT_ID and AUTH0_SECRET in your .env file';
}

// const origin = 'http://mern.surge.sh';
const origin = 'http://localhost:3000';

var authenticate = jwt({
  secret: process.env.AUTH0_SECRET,
  audience: process.env.AUTH0_CLIENT_ID
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// body-parse reads a form's input and stores it as a javascript object accessible through req.body
app.use(cors());
app.get('/', function (req, res) {
  mongo.find({}, (err, tutorials) => {
    res.json(tutorials);
  });
});

app.post('/api/add', authenticate, function (req, res) {
  mongo.create({
    image: req.query.image,
    title: req.query.title,
    author: req.query.author,
    link: req.query.link,
    id: req.query.id}, (err, tutorial) => {
    if (err) return console.error(err);
  });
});

app.listen(3001);

'use strict';
const express = require('express');
const app = express();
const fs = require('fs');
const _ = require('lodash');
const engines = require('consolidate');
var path = require('path');
var bodyParser = require('body-parser');
var User = require('./db').User;

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use('/profilepics', express.static('images'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  User.find({}, (err, users) => {
    res.render('index', {users});
  });
});

app.route('/:username')
  .all((req, res, next) => {
    console.log(req.method, 'for', req.params.username);
    next();
  })
  .get((req, res) => {
    let username = req.params.username;
    User.findOne({username}, (err, user) => {
      res.render('user', {
        user,
        address: user.location});
    });
  })
  .put((req, res) => {
    var username = req.params.username;
    User.findOne({username}, (err, user) => {
      if (err) console.error(err);
      user.name.full = req.body.name;
      user.location = req.body.location;
      user.save();
      res.end(() => {
        res.end();
      });
    });
  })
  .delete((req, res) => {
    let username = req.params.username;
    User.remove({username}, (err, user) => {
      res.sendStatus(200);
    });
  });

app.get('*.json', (req, res) => {
  res.download('./users/' + req.path, 'virus.exe');
});

app.get('/data/:username', (req, res) => {
  let username = req.params.username;
  var readable = fs.createReadStream('./users/' + username + '.json');
  readable.pipe(res);
});

app.get('/error/:username', (req, res) => {
  res.status(404).send('No user named ' + req.params.username + ' found.');
});

app.listen(3000);

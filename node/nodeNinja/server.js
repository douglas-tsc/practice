const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
require('./passport');
const config = require('./config');
const mongo = require('./db');

express()
  .use(bodyParser.json())
// Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST
  .use(bodyParser.urlencoded({extended: false}))
  .use(session({ secret: config.secret, resave: false, saveUninitialized: false}))
  .use(passport.initialize())
  .use(passport.session())
  .get('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.json({
      session: req.session,
      user: req.user,
      authenticated: req.isAuthenticated()
    });
  })
  .get('/login', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.json({name: 'login again'});
  })
.post('/login', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}))
.get('/logout', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  req.session.destroy((err) => {
    if (err) res.sendStatus(400);
    res.redirect('/');
  });
})
.listen(3001);

var express = require('express');
var router = express.Router();
const mongo = require('../db');
const passport = require('passport');


router
.get('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.send({
    session: req.session,
    user: req.user,
    authenticated: req.isAuthenticated()
  });
})
.post('/', passport.authenticate('local', {
  successRedirect: '/',
  failure: '/login'
})
);

module.exports = router;

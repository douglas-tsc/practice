const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('./db');
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcrypt-nodejs');

passport.use('local',
new LocalStrategy((username, password, done) => {
  mongo.findOne({username}, (err, user) => {
    if (err) return done(null, false, {message: err});
    if (user.length === 0 || !bcrypt.compareSync(password, user.password)) {
      return done(null, false, {message: 'Invalid user and password combination'});
    }
    done(null, user);
  });
}));

passport.use('local-register',
new LocalStrategy((username, password, done) => {
  mongo.create({
    username: username,
    password: bcrypt.hashSync(password)
  }, (err, result) => {
    done(null, result);
  });
}));

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  mongo.findById(id, (err, user) => {
    if (err) return done(null, false, {message: err});
    done(null, user);
  });
});

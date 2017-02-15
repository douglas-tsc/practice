 const passport = require('passport');
 const LocalStrategy = require('passport-local').strategy;
 const db = require('./db');

 passport.use(new LocalStrategy(authenticate));

 function authentication (email, password, done) {
   db('users')
    .where('email', email)
    .first()
    .then(user => {
      if (!user || user.password !== password) {
        return done(null, false, {message: 'invalid user, password or combination'});
      }
      done(null, user);
    }, done);
 }

 passport.serializeUser(function (user, done) {
   done(null, user.id);
 });

 passport.deserializeUser(function (id, done) {
   db('user')
   .where('id', id)
   .first()
   .then(user => {
     done(null, user);
   }, done);
 });

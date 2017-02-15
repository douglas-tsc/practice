const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://joshpitzalis:100Fifty!@ds011472.mlab.com:11472/heroku_p8417xpv', (err, connection) => {
  if (err) {
    console.log(err);
  }
  module.exports.db = connection;
});

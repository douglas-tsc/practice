const mongoose = require('mongoose');

mongoose.connect('mongodb://joshpitzalis:100Fifty!@ds011472.mlab.com:11472/heroku_p8417xpv');
  // plug in the promise library:
mongoose.Promise = global.Promise;

mongoose.connection.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
  process.exit(1);
});

const UserSchema = new mongoose.Schema({
  text: String,
  author: String,
  price: Number,
  id: String
});

module.exports = mongoose.model('Tutorial', UserSchema);

const mongoose = require('mongoose');
// consider for url validation https://www.npmjs.com/package/mongoose-type-url

mongoose.connect('mongodb://joshpitzalis:100Fifty!@ds011472.mlab.com:11472/heroku_p8417xpv');
  // plug in the promise library:
mongoose.Promise = global.Promise;

mongoose.connection.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
  process.exit(1);
});

const UserSchema = new mongoose.Schema({
  image: String,
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Tutorial', UserSchema);

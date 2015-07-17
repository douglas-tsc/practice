var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var imageController = require('./controllers/images.js');

// mongoose.connect('mongodb://localhost:27017/greatReviews');

var app = express();

app.use(bodyParser.urlencoded({
  extended:true
}));

var router = express.Router();

router.route('/images')
  .get(imageController.getImages);

router.route('/image')
  .post(imageController.postImage)
  .get(imageController.getImage);

router.route('/decision')
  .get(imageController.postDecision);

app.use('/api', router);

app.listen(3000);

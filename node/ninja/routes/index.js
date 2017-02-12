var express = require('express');
var router = express.Router();
const mongo = require('../db');

router
.get('/', (req, res) => {
  mongo.db.collection('users').find().toArray((err, users) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.json({title: 'All Users',
      users});
  });
});

module.exports = router;

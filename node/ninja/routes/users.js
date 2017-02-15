var express = require('express');
var router = express.Router();
const mongo = require('../db');

/* GET users listing. */
router
.get('/:id', (req, res) => {
  var id = req.params.id;
  mongo.db.collection('users')
  .findOne({id}, (err, users) => {
    if (!users) {
      return res.send(400);
    }
    res.send(users);
  });
})
.post('/', (req, res) => {
  mongo.db.collection('users')
  .insert(req.body, (err, userIds) => {
    res.send(userIds);
  });
})
.put('/:id', (req, res) => {
  var {id} = req.params;
  mongo.db.collection('users')
  .updateOne({id}, {
    $set: req.body
  }, (err, result) => {
    if (result === 0) {
      return res.send(400);
    }
    res.send(200);
  });
})
.delete('/:id', (req, res) => {
  var {id} = req.params;
  mongo.db.collection('users')
  .remove({id}, (err, result) => {
    if (result === 0) {
      return res.send(400);
    }
    res.send(200);
  });
});

module.exports = router;

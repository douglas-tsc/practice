var express = require('express');
var router = express.Router();
const mongo = require('../db');

router
.get('/', (req, res) => {
  const {user_id} = req.params;
  mongo.db.collection('tweets')
  .find().toArray((err, tweets) => {
    res.json(tweets);
  });
})
.get('/:user_id', (req, res) => {
  const {user_id} = req.params;
  mongo.db.collection('tweets')
  .find({user_id}).toArray((err, tweets) => {
    res.json({title: 'My User tweets',
      tweets});
  });
});
// .post('/', (req, res) => {
//   mongo.db.collection('users')
//   .insert(req.body, (err, userIds) => {
//     res.send(userIds);
//   });
// })
// .put('/:id', (req, res) => {
//   var {id} = req.params;
//   mongo.db.collection('users')
//   .updateOne({id}, {
//     $set: req.body
//   }, (err, result) => {
//     if (result === 0) {
//       return res.send(400);
//     }
//     res.send(200);
//   });
// })
// .delete('/:id', (req, res) => {
//   var {id} = req.params;
//   mongo.db.collection('users')
//   .remove({id}, (err, result) => {
//     if (result === 0) {
//       return res.send(400);
//     }
//     res.send(200);
//   });
// });

module.exports = router;

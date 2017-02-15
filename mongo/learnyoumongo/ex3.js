const mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
  if (err) throw err;
  let parrots = db.collection('parrots');
  parrots.find({age: { $gt: +process.argv[2] }}).toArray((err, documents) => {
    if (err) throw err;
    console.log(documents);
    parrots.close();
  });
});

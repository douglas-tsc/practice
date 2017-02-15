grunts = new Mongo.Collection('grunts');

grunts.helpers({

});

// formating the date with moment() so taht it looks better
grunts.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

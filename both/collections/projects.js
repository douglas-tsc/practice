projects = new Mongo.Collection('projects');

projects.helpers({

});

// formating the date with moment() so taht it looks better
projects.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

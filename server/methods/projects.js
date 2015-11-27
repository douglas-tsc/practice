Meteor.methods({
  'add': function (params) {
    projects.insert(params);
  }
});

Meteor.publish("projects", function() {
  return projects.find();
});

Meteor.publish("myProjects", function() {
  return projects.find({user: this.userId});
});

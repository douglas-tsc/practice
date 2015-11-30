Meteor.publish("grunts", function() {
  return grunts.find();
});

Requests = new Mongo.Collection("requests");

var Schemas = {};

Schemas.Requests = new SimpleSchema({
  clientName: {
    type: String,
    label: "Client Name"
  },
  target: {
    type: String,
    label: "Target"
  },
  fulfilled: {
    type: Boolean
  },
  assignedNinja: {
    type: String,
    optional: true
  },
  status: {
    type: String,
    optional: true
  }
});

Requests.attachSchema(Schemas.Requests);

Meteor.methods({
  newRequest(request) {
      Requests.insert({
        clientName: request.clientName,
        target: request.target,
        fulfilled: false,
        status: 'active'
      });
  },
  updateRequest(request) {
    if (! Meteor.userId()) {
        return
      }
      Requests.update(request._id, {
        $set: {fulfilled: true, assignedNinja: request.ninja}
      });
  },
  completeRequest(request) {
    Requests.update(request._id, {
      $set: {status: 'inactive'}
    });
    Ninjas.update(request.ninja, {
      $set: {status: true},
      $inc: {score: 1}
    });
  }
});

if (Meteor.isServer) {
  Meteor.publish('requests', function() {
    return Requests.find({status: 'active'});
  });
}

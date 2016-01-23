Requests = new Mongo.Collection('requests');

var Schemas = {};

Schemas.Requests = new SimpleSchema({
  clientName: {
    type: String,
    label: "Client Name",
    max: 25
  },

  target: {
    type: String,
    label: "Target",
    max: 25,
  },
  fulfilled: {
    type: Boolean
  }
});

Requests.attachSchema(Schemas.Requests);

Meteor.methods({
    newRequest(request) {
        Requests.insert({
            clientName: request.clientName,
            target: request.target,
            fulfilled: false
        });
    }
});

if (Meteor.isServer) {
   Meteor.publish('requests', function() {
        return Requests.find();
    });
}

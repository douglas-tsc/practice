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

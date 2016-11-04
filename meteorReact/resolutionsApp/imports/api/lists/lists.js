import { Mongo } from 'meteor/mongo';
import './methods.js';

export const Resolutions = new Mongo.Collection('resolutions');

if(Meteor.isServer) {
  Meteor.publish('resolutions', function() {
    return Resolutions.find({});
  });
}

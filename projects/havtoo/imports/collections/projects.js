import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'projects.insert': function () {
    return Projects.insert({
      createdAt: new Date(),
      content: {},
      sharedWith: [],
      ownerId: this.userId
    });
  }
});

export const Projects = new Mongo.Collection('projects');

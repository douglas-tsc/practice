import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'projects.insert': function () {
    return Project.insert({
      createdAt: new Date(),
      content: {},
      sharedWith: [],
      ownerId: this.userId
    });
  }
});

export const Project = new Mongo.Collection('projects');

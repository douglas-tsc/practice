import { Meteor } from 'meteor/meteor';
import { Projects } from '../imports/collections/projects';

Meteor.startup(() => {
  Meteor.publish('projects', function () {
    return Projects.find({
      // ownerId: this.userId
    });
  });
});

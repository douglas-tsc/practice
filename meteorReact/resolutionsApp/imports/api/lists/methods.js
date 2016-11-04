import { Meteor } from 'meteor/meteor';
import { Resolutions } from './lists.js';

Meteor.methods({
  addResolution(title) {
    Resolutions.insert({
      title: title,
      createdAt: new Date()
    });
  },
  removeResolution(id) {
    Resolutions.remove(id);
  },
  completeResolution(id) {
    Resolutions.update(id, { $set: { checked: !this.checked } });
  }
});

import { Template } from 'meteor/templating';
import '../ui/components/resolution.html';
import { Resolutions } from '../api/lists/lists.js';
import { Session } from 'meteor/session';

Template.resolution.helpers({
  resolutions() {
    if(Session.get('hideFinished')) {
      return Resolutions.find({ checked: { $ne: true } });
    }
    return Resolutions.find();
  }
});

Template.resolution.events({
  'click .delete' () {
    Meteor.call('removeResolution', this._id);
  },
  'click .toggleChecked' () {
    Meteor.call('completeResolution', this._id);
  }
});

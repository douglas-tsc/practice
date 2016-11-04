import { Template } from 'meteor/templating';
import './item.html';
import { Items } from '../../../api/items.js';

Template.item.events({
  'click .voteOne'(event) {
    Meteor.call('voteOnItem', 'itemOne', this._id);
  },
  'click .voteTwo'(event) {
    Meteor.call('voteOnItem', 'itemTwo', this._id);
  }
});

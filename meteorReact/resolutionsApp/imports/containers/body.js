import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../ui/components/body.html';
import './form.js';
import './resolution.js';
import { Session } from 'meteor/session';

Template.body.onCreated(function() {
  Meteor.subscribe('resolutions');
});


Template.body.events({
  'change .hideFinished' (event) {
    Session.set('hideFinished', event.target.checked);
  }
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

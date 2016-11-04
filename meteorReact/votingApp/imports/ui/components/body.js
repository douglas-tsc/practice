import { Template } from 'meteor/templating';
import { Items } from '../../api/items.js';
import './body.html';
import './items/item.js';
import 'tachyons';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Session } from 'meteor/session';

Template.body.onCreated(function () {
  this.state = new ReactiveDict();
  Meteor.subscribe('allItems');
});

Template.body.helpers({
  items() {
    return Items.find({});
  },
  loggedIn() {
    return Meteor.userId();
  },
  showForm() {
    const instance = Template.instance();
    return instance.state.get('showForm');
  },
  bgColor() {
    return Session.get('bgColor');
  }
});

Template.body.events({
  'click .showForm'(event, instance) {
    Session.set('bgColor', '#FBF1A9');
    instance.state.set('showForm', true);
  },
  'submit .newItems'(event, instance) {
    event.preventDefault();
    Meteor.call('createNewItem', event.target.item1.value,
      event.target.item2.value, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          instance.state.set('showForm', false);
          event.target.item1.value = '';
          event.target.item2.value = '';
        }
      });
  }
});

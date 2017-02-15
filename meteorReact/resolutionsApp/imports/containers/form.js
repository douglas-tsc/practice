import { Template } from 'meteor/templating';
import '../ui/components/form.html';
import { Resolutions } from '../api/lists/lists.js';

Template.form.events({
  'submit .newResolution' (event) {
    event.preventDefault();
    console.log(event.target.res1.value);
    var title = event.target.res1.value;
    Meteor.call('addResolution', title);
    event.target.title.value = '';
  }
});

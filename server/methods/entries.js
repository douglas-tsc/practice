import {Entries} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
export default function () {
 Meteor.methods({
  'entries.create'(text) {
   check(text, String);
   const createdAt = new Date();
   const entry = {text, createdAt};
   Entry.insert(entry);
  }
 });
}

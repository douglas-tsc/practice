import {Entries} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
export default function () {

 Meteor.publish('entries.list', function () {
  const selector = {};
  const options = {
   fields: {_id: 1, text: 1},
   sort: {createdAt: -1}
  };
  return Entries.find(selector, options);
 });

 Meteor.publish('entries.single', function (entryId) {
 check(entryId, String);
 const selector = {_id: entryId};
 return Entries.find(selector);
});
}

import Entry from '../components/Entry.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
export const composer = ({context, entryId}, onData) => {
 const {Meteor, Collections} = context();
 if (Meteor.subscribe('entries.single', entryId).ready()) {
  const entry = Collections.Entries.findOne(entryId);
  onData(null, {entry});
 } else {
  const entry = Collections.Entries.findOne(entryId);
  if (entry) {
   onData(null, {entry});
  } else {
   onData();
  }
 }
};
export default composeAll(
 composeWithTracker(composer),
 useDeps()
)(Entry);

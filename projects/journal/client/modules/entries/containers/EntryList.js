import EntryList from '../components/EntryList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
export const composer = ({context}, onData) => {
 const {Meteor, Collections} = context();
 if (Meteor.subscribe('entries.list').ready()) {
  const entries = Collections.Entries.find().fetch();
  onData(null, {entries});
 }
};
export default composeAll(
 composeWithTracker(composer),
 useDeps()
)(EntryList);

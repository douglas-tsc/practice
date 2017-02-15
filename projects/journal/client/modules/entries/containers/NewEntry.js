import NewEntry from '../components/NewEntry.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
export const composer = ({context, clearErrors}, onData) => {
 const {LocalState} = context();
 const error = LocalState.get('CREATE_ENTRY_ERROR');
 onData(null, {error});
 return clearErrors;
};
export const depsMapper = (context, actions) => ({
 create: actions.entries.create,
 clearErrors: actions.entries.clearErrors,
 context: () => context
});
export default composeAll(
 composeWithTracker(composer),
 useDeps(depsMapper)
)(NewEntry);

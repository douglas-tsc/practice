export default {
 create({Meteor, LocalState, FlowRouter}, text) {
  if (!text) {
   return LocalState.set('CREATE_ENTRY_ERROR', 'Text is required.');
  }
  LocalState.set('CREATE_ENTRY_ERROR', null);
  Meteor.call('entries.create', text, (err) => {
   if (err) {
    return LocalState.set('CREATE_ENTRY_ERROR', err.message);
   }
  });
 },
 clearErrors({LocalState}) {
 return LocalState.set('SAVING_ERROR', null);
}
};

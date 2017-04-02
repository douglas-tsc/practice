import React from 'react';
import NoteList from './NoteList';

const Notes = ({notes, username, addNote}) => (
  <div>
    <NoteList username={username} notes={notes}
      addNote={addNote} />
  </div>
    );

export default Notes;

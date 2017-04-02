import React from 'react';
import AddNote from './AddNote';

const NoteList = ({username, addNote, notes}) => (
  <div>
    <h2 className='f4 bold center mw5'>Notes on {username}</h2>
    <AddNote addNote={addNote} />
    <ul className='list pl0 ml0 center mw5 ba b--light-silver br3'>
      {notes.map((note, index) =>
        <li className='ph3 pv2 bb b--light-silver' key={index}>{note}</li>)}
    </ul>
  </div>
    );

NoteList.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func
};

export default NoteList;

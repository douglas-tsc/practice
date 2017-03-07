import React, { Component } from 'react';
import AddNote from './AddNote';

class NoteList extends Component {
  render () {
    const notes = this.props.notes.map((note, index) =>
      <li className='ph3 pv2 bb b--light-silver' key={index}>{note}</li>
    );
    return (
      <div>
        <h2 className='f4 bold center mw5'>{this.props.username} Notes</h2>
        <AddNote addNote={this.props.addNote} />
        <ul className='list pl0 ml0 center mw5 ba b--light-silver br3' >{notes}</ul>
      </div>
    );
  }
}

NoteList.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func
};

export default NoteList;

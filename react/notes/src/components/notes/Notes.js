import React, { Component } from 'react';
import NoteList from './NoteList';

class Notes extends Component {
  render () {
    return (
      <div>
        <NoteList username={this.props.username} notes={this.props.notes}
          addNote={this.props.addNote} />
      </div>
    );
  }
}

export default Notes;

import React, { Component } from 'react';
import Notes from './notes/Notes';
import Repos from './github/Repos';
import User from './github/User';
import base from '../base';

class Profile extends Component {
  constructor () {
    super();
    this.state = {
      notes: [],
      bio: {
        name: 'Josh'
      },
      repos: ['a', 'b', 'c']
    };
    this.handleAddNote = this.handleAddNote.bind(this);
  }

  handleAddNote (e) {
    e.preventDefault();
    const notes = [...this.state.notes];
    const note = e.target.comment.value;
    notes.push(note);
    this.setState({notes});
    e.target.comment.value = '';
  }

  componentWillMount () {
    this.ref = base.syncState(`/profile/${this.props.match.params.username}`,
      {context: this,
        state: 'notes'
      });
  }

  componentWillUnmount () {
    base.removeBinding(this.ref);
  }

  render () {
    return (
      <div className='dt-ns dt--fixed-ns'>
        <div className='dtc-ns tc pv4 bg-black-10'>
          <User
            username={this.props.match.params.username} bio={this.state.bio} />
        </div>
        <div className='dtc-ns tc pv4 bg-black-05'>
          <Repos
            repos={this.state.repos}
            username={this.props.match.params.username} />
        </div>
        <div className='dtc-ns tc pv4'>
          <Notes
            notes={this.state.notes}
            username={this.props.match.params.username}
            addNote={this.handleAddNote} />
        </div>
      </div>
    );
  }
}

export default Profile;

import React, { Component } from 'react';
import Notes from './notes/Notes';
import Repos from './github/Repos';
import User from './github/User';
import base from '../base';
import getGithubInfo from '../utils/helpers';

class Profile extends Component {
  constructor () {
    super();
    this.state = {
      notes: [],
      bio: {},
      repos: []
    };
    this.handleAddNote = this.handleAddNote.bind(this);
    this.init = this.init.bind(this);
  }

  componentDidMount () {
    this.ref = base.syncState(`/profile/${this.props.match.params.username}`,
      {context: this,
        state: 'notes'
      });
    this.init(this.props.match.params.username);
  }

  init (username) {
    this.ref = base.syncState(`/profile/${username}`,
      {context: this,
        asArray: true,
        state: 'notes'
      });
    getGithubInfo(username)
    .then(data =>
      this.setState({
        bio: data.bio,
        repos: data.repos
      })
  );
  }

  componentWillReceiveProps (nextProps) {
    base.removeBinding(this.ref);
    this.init(nextProps.match.params.username);
  }

  handleAddNote (e) {
    e.preventDefault();
    const notes = [...this.state.notes];
    const note = e.target.comment.value;
    notes.push(note);
    this.setState({notes});
    e.target.comment.value = '';
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
        <div className='dtc-ns tc pv4 bg-black-05 v-top'>
          <Repos
            repos={this.state.repos}
            username={this.props.match.params.username} />
        </div>
        <div className='dtc-ns tc pv4 v-top'>
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

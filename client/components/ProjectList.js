import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Project } from '../../imports/collections/projects';

class ProjectList extends Component {
  render () {
    return (
      <div>
        Project List
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('projects');
  return { projects: Project.find({}).fetch()}
}, ProjectList)

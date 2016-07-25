import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Projects } from '../../imports/collections/projects';

class ProjectList extends Component {
  renderProjects () {

    return this.props.projects.map(project => {
      return (
      <li className='list-group-item' key={project._id}>
        Project {project._id}
      </li>
    );
    });
  }
  render () {
    // console.log(this.props.projects);
    return (
      <ul className='list-group'>
        {this.renderProjects()}
      </ul>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('projects');
  return { projects: Projects.find({}).fetch() };
}, ProjectList);

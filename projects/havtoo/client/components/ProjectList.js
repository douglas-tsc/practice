import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Projects } from '../../imports/collections/projects';
import { Link } from 'react-router';

class ProjectList extends Component {
  renderProjects () {

    return this.props.projects.map(project => {
      const url = `/workspace/${project._id}`;
      return (
      <li className='list-group-item' key={project._id}>
        <Link to={url}> Project {project._id}
        </Link>
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

import React, { Component } from 'react';
import moment from 'moment';

class ToDo extends Component {

  render () {

    const {text, id, completed, onToggle, completedAt} = this.props;
    let renderDate = () => {
      if (completed){
        return`done at ${moment.unix(completedAt).format('h:m')}`;
      }
    }
    return (
      <li onClick={()=>{onToggle(id)}}>
        <input type='checkbox' checked={completed} />
        {text} <em>{renderDate()}</em>
      </li>
    );
  }
}

export default ToDo;

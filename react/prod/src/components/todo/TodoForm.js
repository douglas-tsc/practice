import React, {PropTypes} from 'react';

export const TodoForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input type='text' className='input-reset ma3' value={props.currentTodo} placeholder='Add todos here' onChange={props.handleInputChange} />
  </form>
  );

TodoForm.propTypes = {
  currentTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

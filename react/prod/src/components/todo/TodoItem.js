import React, {PropTypes} from 'react';
import {partial} from '../../lib/utils';

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id);
  const handleRemove = partial(props.handleRemove, props.id);

  return (
    <li>
      <a href='#' onClick={handleRemove} className='red mr2'>x</a><input type='checkbox'
        onChange={handleToggle}
        checked={props.isComplete}
        className='mr2' />{props.name}</li>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  id: PropTypes.number
};

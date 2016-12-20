import React from 'react';

const ToDo = ({text, id, completed, onToggle}) => <li onClick={()=>{onToggle(id)}}>
                                          <input type='checkbox' checked={completed} />
                                          {text}
                                        </li>;
export default ToDo;

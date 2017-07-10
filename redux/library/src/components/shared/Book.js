import React from 'react'
import Edit from '../../images/Edit.js'
import Delete from '../../images/Delete.js'

const Book = ({ state, remove, edit }) =>
  <div>
    <img style={{ width: 250, height: 323 }} src={state.cover} />
    <h2>
      {state.title}
    </h2>
    <h3>
      {state.author}
    </h3>
    <a href={state.link}>
      {state.link}
    </a>
    <div className="flex mxa">
      <div onClick={edit}><Edit /></div>
      <div onClick={remove}><Delete /></div>
    </div>
  </div>

export default Book

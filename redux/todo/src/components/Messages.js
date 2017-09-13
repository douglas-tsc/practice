import React from 'react'

const Messages = ({ message }) =>
  message
    ? <span style={{ backgroundColor: 'red' }}>
        {message}
      </span>
    : null

export default Messages

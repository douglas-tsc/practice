import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ link }) =>
  <div>
    <div>
      {link.description} ({link.url})
    </div>
  </div>

Link.propTypes = {}
Link.defaultProps = {}

export default Link

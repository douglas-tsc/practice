import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Meetings</h1>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    invite: state.invite
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

const inviteContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default inviteContainer

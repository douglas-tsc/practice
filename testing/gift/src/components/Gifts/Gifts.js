import React, { Component } from 'react'

export default class Gift extends Component {
  state = {
    person: '',
    present: ''
  }

  render () {
    return (
      <div>
        <input
          type='text'
          data-test='addPersonName'
          placeholder='Person'
          onChange={e => this.setState({ person: e.target.value })}
        />
        ;
        <input
          type='text'
          data-test='addPresentName'
          placeholder='Present'
          onChange={e => this.setState({ present: e.target.value })}
        />
        <button
          data-test='removeButton'
          onClick={() => this.props.removeGift(this.props.id)}
        >
          Remove
        </button>
      </div>
    )
  }
}

import React, { Component } from 'react'
import {Input, Button, Close} from 'rebass'
import { connect } from 'react-redux'
import { addReminder, deleteReminder } from '../actions'
import { bindActionCreators } from 'redux'
import moment from 'moment'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      dueDate: ''
    }
  }

  addReminder () {
    this.props.addReminder(this.state.text, this.state.dueDate)
  }

  deleteReminder (id) {
    this.props.deleteReminder(id)
  }

  renderReminders () {
    const { reminders } = this.props
    return (
      <ul>{
        reminders.map(reminder => {
          return (
            <li>
              <p className='pr3 di'>
                <span >{reminder.text}</span>
                <em className='pl1'>
                  {moment(new Date(reminder.dueDate)).fromNow()}
                </em>
              </p>
              <Close onClick={() => this.deleteReminder(reminder.id)} />
            </li>
          )
        })
      }</ul>
    )
  }

  render () {
    return (
      <div className='w-50 center'>
        <div className='tc'>
          <h2>Reminder</h2>
        </div>

        <Input
          label='Remind Me to...'
          name='input_example'
          placeholder='Task goes here.'
          rounded
          type='text'
          onChange={e => this.setState({text: e.target.value})}
        />
        <input
          type='datetime-local'
          onChange={e => this.setState({dueDate: e.target.value})} />
        <Button
          backgroundColor='primary'
          color='white'
          inverted
          rounded
          onClick={() => this.addReminder()}
        >
          Add Reminder
        </Button>

        {this.renderReminders()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.table(state)
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, {addReminder, deleteReminder})(App)

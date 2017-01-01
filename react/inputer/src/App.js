import React, {Component} from 'react'

class Message extends Component {
  render () {
    let name = this.props.name
    let message = this.props.message
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>
      </div>
    )
  }
}

class Form extends Component {
  handleSubmit (e) {
    e.preventDefault()
    let updates = {}
    let name = this.refs.name.value
    let message = this.refs.message.value
    if (name.length > 0) {
      this.refs.name.value = ''
      updates.name = name
    }
    if (message.length > 0) {
      this.refs.message.value = ''
      updates.message = message
    }
    this.props.onNewData(updates)
  }

  render () {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <input type='text' ref='name' placeholder='Enter Name' />
        </div>
        <div>
          <textarea type='text' ref='message' placeholder='Enter Message' />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    )
  }
}

class App extends Component {
  constructor (props) {
    super(props)
    this.handleNewData = this.handleNewData.bind(this);
    this.state = {
      name: this.props.name,
      message: this.props.message
    }
  }

  static get defaultProps () {
    return {
      name: 'Josu',
      message: 'This is default Message'
    }
  }

  handleNewData (updates) {
    this.setState(updates)
  }

  render () {
    let name = this.state.name
    let message = this.state.message
    return (
      <div>
        <Message name={name} message={message} />
        <Form onNewData={this.handleNewData} />
      </div>
    )
  }
}

export default App

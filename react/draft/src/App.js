import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Editor, EditorState } from 'draft-js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
    this.onChange = editorState => this.setState({ editorState })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
        <MyInput />
      </div>
    )
  }
}

class MyInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.onChange = evt => this.setState({ value: evt.target.value })
  }
  render() {
    return <input value={this.state.value} onChange={this.onChange} />
  }
}

export default App

import React from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import s from './styles'

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      todos: [],
      newTodo: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handlePress = this.handlePress.bind(this)
  }

  handleChange (text) {
    this.setState({ newTodo: text })
  }

  handlePress () {
    const todos = [...this.state.todos, this.state.newTodo]
    this.setState({todos, newTodo: ''})
  }

  render () {
    return (
      <View style={[s.mxc, s.cxc, s.h_100]}>
        {this.state.todos.map((todo, index) =>
          <Text key={index}>{todo}</Text>)}
        <TextInput onChangeText={this.handleChange}
          value={this.state.newTodo}
          style={s.w_100}
        />
        <TouchableHighlight onPress={this.handlePress}>
          <Text>Add Todo</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

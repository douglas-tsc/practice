import React, { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native'
import s from '../../styles'
import {connect} from 'react-redux'
import { ADD_TODO } from '../../reducers'

class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {
      newTodo: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handlePress = this.handlePress.bind(this)
  }

  handleChange (text) {
    this.setState({ newTodo: text })
  }

  handlePress () {
    this.setState({newTodo: ''})
  }

  render () {
    return (
      <View style={[s.mxc, s.cxc, s.h_100]}>
        {this.props.todos.map((todo, index) =>
          <Text key={index}>{todo.title}</Text>)}
        <TextInput onChangeText={this.handleChange}
          value={this.state.newTodo}
          style={s.w_100}
        />
        <TouchableHighlight onPress={this.handlePress}>
          <Text>Add Todo</Text>
        </TouchableHighlight>

        <TouchableOpacity onPress={this.props.addTodos}>
          <Text>Add Hoo</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapActionsToProps = (dispatch) => ({
  addTodos () {
    dispatch({ type: ADD_TODO, payload: {title: 'nam'} })
  }
})
export const App = connect(mapStateToProps, mapActionsToProps)(Home)

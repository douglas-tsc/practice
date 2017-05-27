import reducer from './reducer.js'
import { createStore } from 'redux'
import comments from './data/comments.js'
import posts from './data/posts.js'

const defaultState = {
  posts,
  comments
}

const store = createStore(reducer, defaultState)

export default store

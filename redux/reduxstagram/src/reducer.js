import { combineReducers } from 'redux'
import { posts } from './components/home/reducer.js'
import { comments } from './components/single/reducer.js'

const rootReducer = combineReducers({
  posts,
  comments
})

export default rootReducer

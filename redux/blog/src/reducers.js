import { combineReducers } from 'redux'
import PostsReducer from './components/posts/reducer.js'

const rootReducer = combineReducers({
  posts: PostsReducer
})

export default rootReducer

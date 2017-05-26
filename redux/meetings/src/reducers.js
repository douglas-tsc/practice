import { combineReducers } from 'redux'
import { inviteReducer } from './components/home/reducers'

const rootReducer = combineReducers({
  invite: inviteReducer
})

export default rootReducer

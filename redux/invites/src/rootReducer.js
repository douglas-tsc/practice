import { combineReducers } from 'redux'
import { inviteReducer } from './components/invites/reducer.js'

const rootReducer = combineReducers({
  invite: inviteReducer
})

export default rootReducer

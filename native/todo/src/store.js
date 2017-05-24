import { createStore, combineReducers} from 'redux'
import todos from '../reducers'

const reducer = combineReducers({todos})

export const store = createStore(reducer)

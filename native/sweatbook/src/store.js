import { createStore } from 'redux'
import rootReducer from './reducers.js'

export const store = createStore(rootReducer)

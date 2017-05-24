import { createStore, combineReducers} from 'redux'

// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import createLogger from 'redux-logger';
// import thunk from 'redux-thunk';
//
import todos from '../reducers'
//
// const identity = x => x;
//
// const logger = createLogger();
//
// const createStoreWithMiddleware = applyMiddleware(thunk, __DEV__ ? logger : identity)(createStore);
//
const reducer = combineReducers({
  todos
})
//
// export default () => createStoreWithMiddleware(reducer);

export const store = createStore(reducer)

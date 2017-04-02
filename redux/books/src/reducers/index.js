import Books from './books';
import activeBooks from './activeBooks';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  Books,
  activeBooks
});

export default rootReducer;

// this is basically your state

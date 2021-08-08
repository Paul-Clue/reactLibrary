import { combineReducers } from 'redux';
import BooksReducer from './book';

const rootReducer = combineReducers({
  addRemoveBook: BooksReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import BooksReducer from './book';
import FilterReducer from './filter';

const rootReducer = combineReducers({
  addRemoveBook: BooksReducer,
  filter: FilterReducer,
});

export default rootReducer;

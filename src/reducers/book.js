import { addBook, removeBook } from '../actions/index';

const CREATE_BOOK = addBook.type;
const REMOVE_BOOK = removeBook.type;

const BooksReducer = (state = [], action) => {
  let changedState = [...state];

  function eraseBook(book) {
    return book !== action.payload;
  }

  switch (action.type) {
    case CREATE_BOOK:
      changedState = [...changedState, action.payload];
      return changedState;
    case REMOVE_BOOK:
      changedState = changedState.filter(eraseBook);
      return changedState;
    default:
      return state;
  }
};

export default BooksReducer;

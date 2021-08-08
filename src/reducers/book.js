// import { addBook, removeBook } from '../actions/index';

// console.log("type1:" + removeBook);//eslint-disable-line
// console.log("type2:" + addBook);//eslint-disable-line

const BooksReducer = (state = [], action) => {
  // const CREATE_BOOK = addBook.type;
  // const REMOVE_BOOK = removeBook.type;
  // console.log("type:" + action.type);//eslint-disable-line
  let changedState = [...state];

  function eraseBook(book) {
    return book !== action.payload;
  }

  switch (action.type) {
    case 'CREATE_BOOK':
      changedState = [...changedState, action.payload];
      return changedState;
    case 'REMOVE_BOOK':
      changedState = changedState.filter(eraseBook);
      return changedState;
    default:
      return state;
  }
};

export default BooksReducer;

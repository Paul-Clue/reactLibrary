import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

function BooksList() {
  const dispatch = useDispatch();

  function handleRemoveBook(book) {
    dispatch(removeBook(book));
  }

  const booksList = useSelector((state) => state.addRemoveBook);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>BookID</th>
          <th className="delete">Delete</th>
        </tr>
      </thead>
      <tbody>
        { booksList.map((book) => (
          <Book key={book.bookId} book={book} remove={handleRemoveBook} />
        )) }
      </tbody>
    </table>
  );
}

export default BooksList;

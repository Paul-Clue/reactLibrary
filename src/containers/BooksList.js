import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

function BooksList() {
  const booksList = useSelector((state) => state.addRemoveBook);

  return (
    <table>
      <thead>
        <tr>
          <th>BookID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        { booksList.map((book) => <Book key={book.bookId} book={book} />) }
      </tbody>
    </table>
  );
}

export default BooksList;

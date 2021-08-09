import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook, CHANGE_FILTER } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import '../App.css';

function BooksList() {
  const dispatch = useDispatch();

  function handleRemoveBook(book) {
    dispatch(removeBook(book));
  }

  function handleFilterChange(filt) {
    dispatch(CHANGE_FILTER(filt));
  }

  const booksList = useSelector((state) => state.addRemoveBook);

  const filtered = useSelector((state) => state.filter);
  const filteredBooks = booksList.filter((book) => book.category === filtered || filtered === 'All');

  return (
    <>
      <CategoryFilter filt={filtered} filter={handleFilterChange} />
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>BookID</th>
            <th className="delete">Delete</th>
          </tr>
        </thead>
        <tbody>
          { filteredBooks.map((book) => (
            <Book key={book.bookId} book={book} remove={handleRemoveBook} />
          )) }
        </tbody>
      </table>
    </>
  );
}

export default BooksList;

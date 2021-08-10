import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import userIcon from '../asset/img/user-solid.svg';
import '../asset/stylesheets/BookList.css';

function BooksList() {
  const dispatch = useDispatch();

  function handleRemoveBook(book) {
    dispatch(removeBook(book));
  }

  function handleFilterChange(filt) {
    dispatch(changeFilter(filt));
  }

  const booksList = useSelector((state) => state.addRemoveBook);

  const filtered = useSelector((state) => state.filter);
  const filteredBooks = booksList.filter((book) => book.category === filtered || filtered === 'All');

  return (
    <>
      <div className="bookstoreContainer">
        <h1 className="bookstoreTitle">Bookstore CMS</h1>
        <p className="books">BOOKS</p>
        <CategoryFilter filt={filtered} filter={handleFilterChange} />
        <div className="userIcon">
          <img src={userIcon} alt="User Icon" className="icon" />
        </div>
      </div>
      <div>
        { filteredBooks.map((book) => (
          <Book key={book.bookId} book={book} remove={handleRemoveBook} />
        )) }
      </div>
    </>
  );
}

export default BooksList;

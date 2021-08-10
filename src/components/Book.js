import React from 'react';
import PropTypes from 'prop-types';
import '../asset/stylesheets/Book.css';

function Book(props) {
  const { book } = props;
  const { remove } = props;
  return (
    <div className="card">
      <div className="bookInfo">
        <p className="bookCategory">{book.category}</p>
        <h2 className="bookTitle">{book.title}</h2>
        <p className="bookAuthor">J. R. R. Tolkien</p>
        <div className="bookActions">
          <button type="button" className="actionText">Comments</button>
          <div className="line" />
          <button type="button" className="actionText" value={book} onClick={() => remove(book)}>Remove</button>
          <div className="line" />
          <button type="button" className="actionText">Edit</button>
        </div>
      </div>
      <div className="completed">
        <div className="circle" />
        <div className="completedInfo">
          <p className="percentage">64%</p>
          <p className="completedText">Completed</p>
        </div>
      </div>
      <div className="bigLine" />
      <div className="progress">
        <p className="current">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 17</p>
        <button type="button" name="button" className="updateButton">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = { book: PropTypes.instanceOf(Object).isRequired };
Book.propTypes = { remove: PropTypes.instanceOf(Function).isRequired };

export default Book;

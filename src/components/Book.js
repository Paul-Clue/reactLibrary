import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Book(props) {
  const { book } = props;
  return (
    <tr>
      <td className="row">{book.title}</td>
      <td className="row">{book.category}</td>
      <td className="row">{book.bookId}</td>
    </tr>
  );
}

Book.propTypes = { book: PropTypes.instanceOf(Object).isRequired };

export default Book;

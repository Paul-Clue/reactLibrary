import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { book } = props;
  return (
    <tr>
      <td>{book.bookId}</td>
      <td>{book.category}</td>
      <td>{book.name}</td>
    </tr>
  );
}

Book.propTypes = { book: PropTypes.instanceOf(Object).isRequired };

export default Book;

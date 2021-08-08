import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Book(props) {
  const { book } = props;
  const { remove } = props;
  return (
    <tr>
      <td className="row">{book.title}</td>
      <td className="row">{book.category}</td>
      <td className="row">{book.bookId}</td>
      <td className="rowBut"><button type="button" onClick={() => remove(book)}>Remove Book</button></td>
    </tr>
  );
}

Book.propTypes = { book: PropTypes.instanceOf(Object).isRequired };
Book.propTypes = { remove: PropTypes.instanceOf(Function).isRequired };

export default Book;

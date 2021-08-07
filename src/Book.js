import React from 'react';
import PropTypes from 'prop-types';

function Book({ bookId, category, title }) {
  return (
    <tr>
      <td>{bookId}</td>
      <td>{category}</td>
      <td>{title}</td>
    </tr>
  );
}

Book.propTypes = { bookId: PropTypes.string.isRequired };
Book.propTypes = { category: PropTypes.string.isRequired };
Book.propTypes = { title: PropTypes.string.isRequired };

export default Book;

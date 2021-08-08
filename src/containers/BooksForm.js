import React from 'react';
import { useSelector } from 'react-redux';

function BooksForm() {
  const bk = useSelector((state) => state.addRemoveBook);
  const cat = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <label htmlFor="book">
        Add Book:
        <input type="text" name="book" id="book" />
      </label>

      <input type="submit" value="Submit" />

      <label htmlFor="category">
        City:
        <select name="category" id="category">
          {cat.map((catt) => <option value={catt} key={catt}>{catt}</option>)}
        </select>
      </label>
    </form>
  );
}

export default BooksForm;

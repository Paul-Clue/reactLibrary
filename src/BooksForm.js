import React from 'react';

function BooksForm() {
  const cat = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];// eslint-disable-line
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

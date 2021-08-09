import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../actions/index';

// GET THE STATE FOR CATEGORY AND FIX IT IN THE "handleSubmit" FUNCTION
function BooksForm() {
  const bookTitle = useRef();
  const bookCategory = useRef();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  function handleChangeTitle() {
    const title1 = bookTitle.current.value;
    setTitle(title1);
  }

  function handleChangeCategory() {
    const category1 = bookCategory.current.value;
    setCategory(category1);
  }

  function handleSubmit() {
    const book = {
      bookId: uuidv4(),
      title,
      category,
    };
    dispatch(addBook(book));
    setTitle('');
    setCategory('');
    bookTitle.current.value = null;
  }

  function handleForm(event) { event.preventDefault(); }

  const cat = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form onSubmit={handleForm}>
      <label htmlFor="book">
        Add Book:
        <input type="text" name="book" id="book" defaultValue="" ref={bookTitle} onChange={handleChangeTitle} />
      </label>

      <input type="submit" value="Submit" onClick={handleSubmit} />

      <label htmlFor="category">
        Category:
        <select name="category" id="category" defaultValue="" ref={bookCategory} onClick={handleChangeCategory}>
          {cat.map((catt) => <option value={catt} key={catt}>{catt}</option>)}
        </select>
      </label>
    </form>
  );
}

export default BooksForm;

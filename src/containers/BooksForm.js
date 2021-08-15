import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../actions/index';
import '../asset/stylesheets/BooksForm.css';

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
    <form onSubmit={handleForm} className="formContainer">
      <div className="lineHorizontal" />
      <h2 className="formTitle">
        ADD NEW BOOK
      </h2>

      <input type="text" name="book" className="inputPanel" id="book" defaultValue="" ref={bookTitle} onChange={handleChangeTitle} placeholder="BOOK TITLE" />

      <select name="category" className="selectPanel" id="category" defaultValue="" ref={bookCategory} onClick={handleChangeCategory} required>
        <option value="" disabled selected hidden>Category</option>
        {cat.map((catt) => <option value={catt} key={catt} placeholder="CATEGORY">{catt}</option>)}
      </select>
      <input type="submit" value="Add Book" className="submitButton" onClick={handleSubmit} />
    </form>
  );
}

export default BooksForm;

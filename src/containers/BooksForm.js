import React from 'react';

class  BooksForm extends React.component {
  constructor(props){
    super(props);
    this.state = {
       cat: ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'],
    }

  }
  
  render(){
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
            {this.state.cat.map((catt) => <option value={catt} key={catt}>{catt}</option>)}
          </select>
        </label>
      </form>
    )
  };
}

export default BooksForm;

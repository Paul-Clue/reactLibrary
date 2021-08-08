const FilterReducer = (state = [], action) => {
  let changedState = [...state];

  console.log(action.payload);//eslint-disable-line
  function FilterBook(book) {
    return book.category === action.payload;
  }

  switch (action.type) {
    case 'Change':
      changedState = changedState.filter(FilterBook);
      return changedState;
    default:
      return state;
  }
};

export default FilterReducer;

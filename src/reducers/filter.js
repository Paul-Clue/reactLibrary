const FilterReducer = (state = 'All', action) => {
  let changedState = state;

  switch (action.type) {
    case 'CHANGE_FILTER':
      changedState = action.payload;
      return changedState;
    default:
      return state;
  }
};

export default FilterReducer;

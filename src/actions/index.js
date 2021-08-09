export const addBook = (book) => ({
  type: 'CREATE_BOOK',
  payload: book,
});

export const removeBook = (book) => ({
  type: 'REMOVE_BOOK',
  payload: book,
});

export const CHANGE_FILTER = (filt) => ({
  type: 'CHANGE_FILTER',
  payload: filt,
});

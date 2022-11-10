const ADD_BOOK = '/bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    id: '1',
    title: 'Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: '2',
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: '3',
    title: 'Capital in The Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

const addBookAction = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBookAction = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default: return state;
  }
};

export { addBookAction, removeBookAction };
export default reducer;

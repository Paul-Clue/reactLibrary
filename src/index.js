import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers';
import App from './App';

const Books = [
  {
    bookId: uuidv4(),
    name: 'some',
    category: 'Action',
  },

];

const store = createStore(
  rootReducer,
  Books,
  devToolsEnhancer(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

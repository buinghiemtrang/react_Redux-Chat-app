import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './sass/index.scss';

// import { store } from './app/store';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux'
import myReducer from './reducer/index'
import thunk from 'redux-thunk'

const store = createStore(
  myReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


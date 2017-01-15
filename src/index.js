import 'babel-core/polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { App } from './components/App';
import appReducer from './appReducer';

// Because we're using webpack, importing css/scss from js will include them in the build
// In development, the css is added to the page dynamically.
// In prod, it is extracted into a separate css file for better loading performance.
import './index.scss';

const store = createStore(appReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

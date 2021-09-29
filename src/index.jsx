import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './route';
import configureStore from './redux';

const initialState = {};
const store = configureStore(initialState);
const rootEle = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  rootEle
);

if (module.hot) {
  module.hot.accept();
}

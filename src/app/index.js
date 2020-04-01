import React from 'react';
import { Routes } from 'modules';
import { Provider } from 'react-redux';
import getStore from './store.js';

const store = getStore();

function App() {
  return (
      <Provider store={store}>
        <Routes />
      </Provider>
  );
}

export default App;

import React from 'react';
import { Routes } from 'modules';
import { Provider } from 'react-redux';
import initStore from './store.js';

const store = initStore();

function App() {
  return (
      <Provider store={store}>
        <Routes />
      </Provider>
  );
}

export default App;

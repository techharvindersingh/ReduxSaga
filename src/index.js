import React from 'react';
import store from './store/configureStore';
import {Provider} from 'react-redux';
import App from './App';

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;

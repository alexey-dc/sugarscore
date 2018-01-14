import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Widget from './widget';
import App from './app';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
};

export default Root;
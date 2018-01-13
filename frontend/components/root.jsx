import React from 'react'
import { Route, HashRouter } from 'react-router-dom';
import Widget from './widget';

const Root = () => {
  return (
    <HashRouter>
      <Widget />
    </HashRouter>
  );
};

export default Root;
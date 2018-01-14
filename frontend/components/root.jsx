import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Widget from './widget';
import Splash from './splash';

const Root = () => {
  return (
    <HashRouter>
      <Splash />
    </HashRouter>
  );
};

export default Root;
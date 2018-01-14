import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SplashContainer from './splash_container';
import BorrowContainer from './borrow_container';
import TopNav from './top_nav';

const App = () => {
  return (
    <div> 
      <Route path="/" component={TopNav}/>
      <div className="main">
        <Switch>
          <Route exact path="/" component={SplashContainer}/>
          <Route exact path="/borrow" component={BorrowContainer}/>
        </Switch>
      </div>
    </div>
  );
};

export default App;
import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Splash from './splash';
import TopNav from './top_nav';

const App = () => {
  return (
    <div> 
      <Route path="/" component={TopNav}/>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Splash}/>
          <Route exact path="/borrow" component={Splash}/>
          <Route exact path="/payback" component={Splash}/>
          
        </Switch>
      </div>
    </div>
  );
};

export default App;
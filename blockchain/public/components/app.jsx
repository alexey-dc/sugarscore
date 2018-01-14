import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { 
  AuthRoute, 
  ProtectedRoute 
} from './route_util';
import SplashContainer from './splash_container';
import BorrowContainer from './borrow_container';
import PaybackContainer from './payback_container';
import TopNav from './top_nav';

const App = () => {
  return (
    <div> 
      <Route path="/" component={TopNav}/>
      <div className="main">
        <Switch>
<<<<<<< HEAD
          <Route exact path="/" component={SplashContainer}/>
          <ProtectedRoute exact path="/borrow" component={BorrowContainer}/>
          <ProtectedRoute exact path="/payback" component={PaybackContainer}/>
=======
          <Route exact path="/" component={Splash}/>
          <Route exact path="/borrow" component={Splash}/>
          <Route exact path="/payback" component={Splash}/>
          
>>>>>>> 7a20c723c3e9c0e8c5f2f0fab09b5dfbd78a124e
        </Switch>
      </div>
    </div>
  );
};

export default App;
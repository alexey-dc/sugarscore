import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import store from './store';


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});

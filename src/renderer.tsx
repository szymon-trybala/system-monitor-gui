import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./App";
// Import the styles here to process them with webpack
import '@public/style.css';
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.js";

ReactDOM.render(
  <div className='app'>
   <Provider store={store}><Router><App /></Router></Provider>
  </div>, document.getElementById('app')
);

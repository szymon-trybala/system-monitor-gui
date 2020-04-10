/**
 * React renderer.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./App";
// Import the styles here to process them with webpack
import '@public/style.css';
import { HashRouter as Router } from "react-router-dom";


ReactDOM.render(
  <div className='app'>
   <Router><App /></Router> 
  </div>,
  document.getElementById('app')
);

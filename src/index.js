import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ShopifyProvider from './Context/ShopifyContext';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
  <ShopifyProvider >
  <Router >
    <App />
   </Router> 
    </ShopifyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


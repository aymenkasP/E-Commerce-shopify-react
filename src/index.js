import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ShopifyProvider from './Context/ShopifyContext';

ReactDOM.render(
  <React.StrictMode>
  <ShopifyProvider >
    <App />
    </ShopifyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


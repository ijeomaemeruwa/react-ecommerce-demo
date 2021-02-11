import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';
import CartContextProvider from './context/CartContext';


ReactDOM.render(
  <CartContextProvider>
  <Router>
    <App />
  </Router>
  </CartContextProvider>,
  document.getElementById('root')
);


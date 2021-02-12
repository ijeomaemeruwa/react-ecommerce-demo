import React, {Component} from 'react'
import './App.css';
import Header from './components/Header/Header';
import ProductPage from './views/Product/ProductPage';
import SignUp from './views/Auth/SignUp';
import LogIn from './views/Auth/LogIn';
import Cart from './views/Cart/Cart';
import ProductDetails from './views/ProductDetails/ProductDetails';
import {PRODUCTS} from './data/products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component{
  state= {
    search: ''
  }
 

  render() {
    const { search } = this.state
    const filtered = PRODUCTS.filter(item => {
      return item.brand.toLowerCase().includes(search.toLowerCase());
    })
    
  return (
  <>
  <Router>
  <Header search={search} />

  <Switch>
    <Route exact path="/">
      <ProductPage filtered={filtered} />
    </Route>
    <Route path="/productdetails/:productId"><ProductDetails/></Route>
    <Route exact path="/signup"><SignUp /></Route>
    <Route exact path="/login"><LogIn /></Route>
    <Route exact path="/cart"><Cart /></Route>
  </Switch>
  </Router>
  </>
  );
}
}

export default App;

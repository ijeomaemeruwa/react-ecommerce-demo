import './App.css';
import Header from './components/Header/Header';
import ProductPage from './views/Product/ProductPage';
import SignUp from './views/Auth/SignUp';
import LogIn from './views/Auth/LogIn';
import Cart from './views/Cart/Cart';
import ProductDetails from './views/ProductDetails/ProductDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {


  return (
  <>
  <Router>
  <Header />

  <Switch>
    <Route exact path="/"><ProductPage /></Route>
    <Route path="/productdetails/:productId"><ProductDetails/></Route>
    <Route exact path="/signup"><SignUp /></Route>
    <Route exact path="/login"><LogIn /></Route>
    <Route exact path="/cart"><Cart /></Route>
  </Switch>
  </Router>
  </>
  );
}


export default App;

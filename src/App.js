import './App.css';
import Header from './components/Header/Header';
import ProductPage from './views/Product/ProductPage';
import SignUp from './views/Auth/SignUp';
import LogIn from './views/Auth/LogIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// ProductDetails
// Cart


const App = () => {
  return (
  <>
  <Router>
  <Header />

  <Switch>
      <Route exact path="/"><ProductPage /></Route>
      <Route path="/productdetails/:id"></Route>
      <Route exact path="/signup"><SignUp /></Route>
      <Route exact path="/login"><LogIn /></Route>
  </Switch>
  </Router>
  </>
  );
}


export default App;

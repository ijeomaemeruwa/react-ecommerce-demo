import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductPage from './views/Product/ProductPage';


const App = () => {
  return (
  <>
    <Router>
    <Header />

    <Switch>
      <Route exact path="/"><ProductPage /></Route>
      <Route path="/:productId"></Route>
    </Switch>

    </Router>
  </>
  );
}


export default App;

import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import Profile from './components/Profile';
import WishList from './components/WishList';
import Footer from './components/Footer.js';
import { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Navigate,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar />
        </header>
        <div className="Body">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/myprofile" component={Profile} />
            <Route exact path="/mycart" component={Cart} />
            <Route exact path="/mywishlist" component={WishList} />
          </Switch>
        </div>

        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import App from '../components/App';
import Home from '../components/home/Home';
import QuoteComp from '../components/quotes/QuoteComp';
import Navbar from '../components/navbar/Navbar';

const Routes = () => (
  <Router>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/calculator" component={App} />
    <Route exact path="/quote" component={QuoteComp} />
  </Router>
);

export default Routes;

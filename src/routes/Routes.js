import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import App from '../components/App';
import Home from '../components/home/Home';
import QuoteComp from '../components/quotes/QuoteComp';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calculator" component={App} />
      <Route exact path="/quote" component={QuoteComp} />
    </Switch>
  </Router>
);

export default Routes;

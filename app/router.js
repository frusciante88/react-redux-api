import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import Main from './layouts/main';

// Pages
import Home from './components/home';

export default (
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path="/" component={Home} />
    </Route>
  </Router>
);
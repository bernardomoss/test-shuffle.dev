import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import TestimonialsPage from './pages/Testimonials.js';
import AppsPage from './pages/Apps.js';
import HttpCodesPage from './pages/Http-codes.js';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route exact path="/testimonials">
            <TestimonialsPage />
          </Route>
          <Route exact path="/apps">
            <AppsPage />
          </Route>
          <Route exact path="/httpcodes">
            <HttpCodesPage />
          </Route>
        </Switch>
    </Router>
  );
}


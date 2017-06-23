import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from '../store';
import App from '../component/App';
import Home from '../component/Home';
import About from '../component/About';
import NotFound from '../component/NotFound';

const history = syncHistoryWithStore(browserHistory, store);

const Routes = () => {
    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="home" component={Home} />
          <Route path="about" component={About} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    );
};

export default Routes;

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Weather} />
      <Route path='about' component={About} />
      <Route path='Examples' component={Examples} />
    </Route>
  </Router>,
  document.getElementById('root')
);

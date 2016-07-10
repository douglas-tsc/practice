import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Bins } from '../imports/collections/bins';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import BinsMain from './components/bins/binsMain';
import BinsList from './components/bins/binsList';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={BinsList} />
      <Route path='bins/:binId' component={BinsMain} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.app'));
});

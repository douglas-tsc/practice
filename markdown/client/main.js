import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Bins } from '../imports/collections/bins';
import { Router, Route, IndexRouter, browserHistory } from 'react-router';
import BinsMain from './components/bins/binsMain';
import BinsList from './components/bins/binsList';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='bins' component={BinsMain}></Route>
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.app'));
});

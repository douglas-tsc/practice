import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Projects } from '../imports/collections/projects'

// import { Meteor } from 'meteor/meteor';
// import { render } from 'react-dom';
// import '../imports/startup/accounts-config.js';
// import App from '../imports/ui/App.jsx';
// import Wrapper from '../imports/ui/Wrapper.jsx';
// import { Router, Route, IndexRoute, browserHistory} from 'react-router';
// import EditItem from '../imports/ui/EditItem.jsx';
//
// const routes = (
//   <Router history={browserHistory}>
//     <Route path='/' component={Wrapper}>
//       <IndexRoute component={App} />
//       <Route path='edit' component={EditItem}>
//       </Route>
//     </Route>
//   </Router>
// );

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('render-target'));
});

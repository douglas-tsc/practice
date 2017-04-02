Router.route('/', {
  name: 'home'
});

Router.route('/projects', {
  name: 'projects',
  controller: 'projectsController'
});

Router.route('/projects/add', {
  name: 'add',
  controller: 'projectsController'
});

Router.route('/grunts', {
  name: 'grunts',
  controller: 'gruntsController'
});

Router.route('/grunts/addGrunts', {
  name: 'addGrunts',
  controller: 'gruntsController'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

// this is where you specify what pages you need to be logged in to view
Router.plugin('ensureSignedIn', {
  only: ['dashboard', 'addprojects']
});

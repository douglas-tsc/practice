FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('homeLayout');
  }
});

FlowRouter.route('/recipeBook', {
  name: 'test',
  action() {
    BlazeLayout.render('mainLayout', {main:'recipes'});
  }
});

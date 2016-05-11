FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('homeLayout');
  }
});

FlowRouter.route('/test', {
  name: 'test',
  action() {
    BlazeLayout.render('mainLayout', {main:'test'});
  }
});

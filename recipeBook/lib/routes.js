FlowRouter.route('/', {
  name: 'home',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('homeLayout');
  }
});

FlowRouter.route('/recipeBook', {
  name: 'test',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('mainLayout', {main:'recipes'});
  }
});

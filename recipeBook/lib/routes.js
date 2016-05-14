FlowRouter.route('/', {
  name: 'home',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('homeLayout');
  }
});

FlowRouter.route('/recipeBook', {
  name: 'recipeBook',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('mainLayout', {main:'recipes'});
  }
});

FlowRouter.route('/recipe/:id', {
  name: 'recipe',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('mainLayout', {main:'recipeSingle'});
  }
});

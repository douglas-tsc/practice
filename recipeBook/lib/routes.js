if (Meteor.isClient) {
  Accounts.onLogin(function(){
    FlowRouter.go('recipeBook');
  });

  Accounts.onLogout(function(){
    FlowRouter.go('home');
  });
}

FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()) {
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/', {
  name: 'home',
  action() {
    if (Meteor.userId()) {
      FlowRouter.go('recipeBook');
    }
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

FlowRouter.route('/menu', {
  name: 'menu',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('mainLayout', {main:'menu'});
  }
});

FlowRouter.route('/shopping-list', {
  name: 'list',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('mainLayout', {main:'shoppingList'});
  }
});

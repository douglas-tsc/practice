// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});

Router.route('/welcome', {
  name: 'welcome',
  action: function () {
    this.render('welcome');
    SEO.set({ title: 'Welcome to - ' + Meteor.App.NAME });
  }
});

Router.route('/profile', {
  name: 'profile',
  action: function () {
    this.render('profile');
    SEO.set({ title: 'Profile - ' + Meteor.App.NAME });
  }
});

Router.route('/people', {
  name: 'people',
  action: function () {
    this.render('people');
    SEO.set({ title: 'People - ' + Meteor.App.NAME });
  }
});

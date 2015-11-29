DashboardController = AppController.extend({
  waitOn: function() {
    return this.subscribe('myProjects');
  }
});

DashboardController.helpers({
    'myProjects' : function(){
        return projects.find({user: Meteor.userId()});
    }
});

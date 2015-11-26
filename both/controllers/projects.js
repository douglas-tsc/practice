projectsController = AppController.extend({
  waitOn: function() {
    return this.subscribe('projects');
  },
  data: {
    projects: projects.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Projects');
  }
});

projectsController.events({

});

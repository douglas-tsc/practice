projectsController = AppController.extend({
    waitOn: function() {
        return this.subscribe('projects');
    },
    data: {
        projects: projects.find({})
    },
    onAfterAction: function() {
        Meta.setTitle('Projects');
    }
});

projectsController.events({
    'submit .add-project-form': function(event) {
        var title = event.target.title.value;
        var description = event.target.description.value;
        var help = event.target.help.value;
        var params = {
            title: title,
            description: description,
            help: help,
            user: Meteor.userId(),
            username: Meteor.user().username,
            createdAt: new Date()
        };

        Meteor.call('add', params);
        toastr.success('Project Added');
        return false;
    }
});

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


DashboardController.events({
    'submit .update-project-form': function(event) {
        var title = event.target.title.value;
        var description = event.target.description.value;
        var id = event.target.id.value;
        var params = {
            title: title,
            description: description,
            user: Meteor.userId(),
            username: Meteor.user().username,
            contact: Meteor.user().emails[0].address,
            updatedAt: new Date()
        };

        Meteor.call('update', id, params);
        toastr.success('Project Updated');
        Router.go('/dashboard');
        return false;
    },
    'click .remove-project': function(event){
        if (confirm("Are you sure?")) {
            Meteor.call('remove', event.currentTarget.id);
            toastr.warning('Project Removed');
            return false;

        }
    }
});

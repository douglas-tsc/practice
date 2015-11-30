gruntsController = AppController.extend({
    waitOn: function() {
        return this.subscribe('grunts');
    },
    data: {
        grunts: grunts.find({})
    },
    onAfterAction: function() {
        Meta.setTitle('People');
    }
});

gruntsController.events({
    'submit .add-grunts-form': function(event) {
        var name = event.target.name.value;
        var skills = event.target.skills.value;
        var params = {
            name: name,
            skills: skills,
            user: Meteor.userId(),
            username: Meteor.user().username,
            contact: Meteor.user().emails[0].address,
            createdAt: new Date()
        };

        Meteor.call('addGrunts', params);
        toastr.success('Skills Added');
        Router.go('/grunts');
        return false;
    }
});

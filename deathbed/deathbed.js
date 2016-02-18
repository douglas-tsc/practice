if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.hello.helpers({
        counter: function() {
            return Session.get('counter');
        }
    });

    Template.hello.events({

        'click #work': function(event, instance) {
            Session.set('counter', Session.get('counter') + 1);
            $(event.currentTarget).prop('disabled', true);
        },
        'click #people': function(event, instance) {
            Session.set('counter', Session.get('counter') + 1);
            $(event.currentTarget).prop('disabled', true);
        },
        'click #alone': function(event, instance) {
            Session.set('counter', Session.get('counter') + 1);
                $(event.currentTarget).prop('disabled', true);
            }
            //
            // 'click button': function() {
            //     // increment the counter when button is clicked
            //     Session.set('counter', Session.get('counter') + 1);
            //     $(this).prop('disabled');
            // }

    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}

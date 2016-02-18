Memory = new Mongo.Collection("memories");

if (Meteor.isClient) {

    Meteor.subscribe("memories");

    Session.setDefault('counter', 0);
    Session.setDefault('peeps', false);
    Session.setDefault('work', false);
    Session.setDefault('alone', false);

    Template.points.helpers({
        counter: function() {
            return Session.get('counter');
        }
    });

    Template.points.events({

        'click #work': function(event, instance) {
            Session.set('counter', Session.get('counter') + 1);
            Session.set('work', "WORK");
            $(event.currentTarget).prop('disabled', true);
        },
        'click #people': function(event, instance) {
            Session.set('counter', Session.get('counter') + 1);
            Session.set('peeps', "PEOPLE");
            $(event.currentTarget).prop('disabled', true);
        },
        'click #alone': function(event, instance) {
            Session.set('counter', Session.get('counter') + 1);
            Session.set('alone', 'ALONE');
            $(event.currentTarget).prop('disabled', true);

        },
        'click #none': function(event, instance) {
            // Session.set('counter', Session.get('counter') + 1);
            $(event.currentTarget).prop('disabled', true);
        }

    });


    Template.notes.events({
        "submit .new-note": function(event) {
            // Prevent default browser form submit
            event.preventDefault();

            // Get value from form element
            var text = event.target.text.value;
            var count = Session.get('counter');
            var people = Session.get('peeps');
            var work = Session.get('work');
            var alone = Session.get('alone');

            // Insert a task into the collection
            Meteor.call("addMemory", text, count, people, work, alone);

            // Clear form
            event.target.text.value = "";
        }
    });

    Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
    });

}



if (Meteor.isServer) {

    Meteor.methods({
        addMemory: function(text, count, people, work, alone) {
            if (!Meteor.userId()) {
                throw new Meteor.Error("not-authorized");
            }

            Memory.insert({
                count: count,
                people: people,
                work: work,
                alone: alone,
                note: text,
                createdAt: new Date(),
                owner: Meteor.userId(),
                username: Meteor.user().username
            });
        }
    });

    Meteor.publish("memories", function () {
        return Memory.find();
      });
}

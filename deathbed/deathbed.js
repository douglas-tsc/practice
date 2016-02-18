Memory = new Mongo.Collection("memories");

if (Meteor.isClient) {
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


  Template.body.helpers({
      tasks: function () {
        return Memory.find({});
      }
  });


    Template.notes.events({
    "submit .new-note": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var text = event.target.text.value;


      // Insert a task into the collection
      Memory.insert({
          count: Session.get('counter'),
          people: Session.get('peeps'),
          work: Session.get('work'),
          alone: Session.get('alone'),
        note: text,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.text.value = "";
    }
  });

}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}

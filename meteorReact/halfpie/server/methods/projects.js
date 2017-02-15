Meteor.methods({
    'add': function(params) {
        projects.insert(params);
    },
    'update': function(id, params) {
        projects.update({
            _id: id
        }, {
            $set: params
        });
    },
    'remove': function(id) {
        projects.remove(id);
    }
});

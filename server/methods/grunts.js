Meteor.methods({
    'addGrunts': function(params) {
        grunts.insert(params);
    },
    'updateGrunts': function(id, params) {
        grunts.update({
            _id: id
        }, {
            $set: params
        });
    },
    'removeGrunts': function(id) {
        grunts.remove(id);
    }
});

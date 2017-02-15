Meteor.methods({
    addRole(userId) {
        if (Meteor.users.find().count() === 1) {
            Roles.addUsersToRoles(userId, 'leader');
        } else {
            Roles.addUsersToRoles(userId, 'ninjas');
        }
    }
});

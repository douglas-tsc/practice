Recipes = new Meteor.Collection('recipes');

Recipes.allow({
  insert: function(userId, doc){
    return !!userId;
  }
});

RecipesSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  desc: {
    type: String,
    label: "Description"
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: 'hidden'
    }
  },
  createdAt: {
    type: Date,
    label: "Create at",
    autoValue: function() {
      return new Date()
    },
    autoform: {
      type: 'hidden'
    }
  }
});

Recipes.attachSchema(RecipesSchema);

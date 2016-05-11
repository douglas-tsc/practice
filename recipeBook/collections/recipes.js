Recipes = new Meteor.Collection('recipes');

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
    }
  },
  createdAt: {
    type: Date,
    label: "Create at",
    autoValue: function() {
      return new Date()
    }
  }
});

Recipes.attachSchema(RecipesSchema);

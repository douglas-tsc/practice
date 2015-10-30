// Fixture data
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Josh Pitzalis' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Random Dude' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    title: '"Phenomenal time" to be an entrepreneur in India: Nikesh Arora',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://ecoti.ms/R1QK9a',
    submitted: new Date(now - 7 * 3600 * 1000)
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Curocracy sounds like an interesting project, can I get involved?'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can!'
  });

  Posts.insert({
    title: 'Mitra Biotech\'s Personalization Of Cancer Care With Technology Made In India',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://onforb.es/1O1ZUmP',
    submitted: new Date(now - 10 * 3600 * 1000)
  });

  Posts.insert({
    title: 'Boosting entrepreneurship: Venture capital funds can now invest 25% in India-linked firms',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://bit.ly/1OKUJY8',
    submitted: new Date(now - 12 * 3600 * 1000)
  });
}

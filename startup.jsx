if (Meteor.isClient) {
  Meteor.startup(function () {
    // injectTapEventPlugin();
    React.render(<App />, document.getElementById('App'))
  })
}


App = React.createClass({
  getReviews() {
    return [
      { _id: 1, text: "This is review 1" },
      { _id: 2, text: "This is review 2" },
      { _id: 3, text: "This is review 3" }
    ];
  },

  renderTasks() {
    return this.getReviews().map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Review List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>

        <goodreads/>
      </div>
    );
  }
});


Task = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    task: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
});

if (Meteor.isClient) {
  // This code is executed on the client only

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    React.render(<App />, document.getElementById("render-target"));
  });
}

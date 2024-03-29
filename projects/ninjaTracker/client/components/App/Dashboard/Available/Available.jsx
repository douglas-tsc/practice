Available = React.createClass({
  propTypes: {},
  mixins: [
    ReactMeteorData
  ],

  getInitialState() {
    return {}
  },
  getMeteorData() {
    Meteor.subscribe('ninjas');
    return {
      ninjas: Ninjas.find({status: true}).fetch()
    }
  },
  renderNinjas() {
    return this.data.ninjas.map((ninja) => {
          return <p className="ninja" key={ninja._id}>{ninja.fullName()}</p>;
      });
  },
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h1>Available</h1>
        </div>
        <div className="panel-content">
          {this.renderNinjas()}
        </div>
      </div>
    )
  }
});

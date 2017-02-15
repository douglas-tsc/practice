NewNinja = React.createClass({
  addNinja(e) {
    e.preventDefault();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var email = $('#email').val();

    var ninja = {firstName: firstName, lastName: lastName, email: email};

    Meteor.call('addNinjaFromForm', ninja, function(error, result) {
      if (error) {
        return sAlert.error(error.reason, {effect: 'genie'});
      } else {
        $('#firstName').val('');
        $('#lastName').val('');
        $('#email').val('');
        return sAlert.success('Ninja successfully created!', {effect: 'genie'});
      }
    });
    $('#firstName').val('');
    $('#lastName').val('');
    $('#email').val('');
  },
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h1>Add Ninja</h1>
            <form onSubmit={this.addNinja} id="new-ninja-form" action="#">
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" className="form-control"/>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" className="form-control"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className="form-control"/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Add Ninja</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
});

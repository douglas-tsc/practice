Register = React.createClass({
    register(e) {
        e.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        Accounts.createUser({
            email: email,
            password: password
        }, function(error) {
            if (error) {
                sAlert.error(error.reason, {
                    effect: 'genie',
                    position: 'top'
                });
            } else {
                FlowRouter.go('/');
                var userid = Meteor.userId();
                Meeor.call('addNinja', user);
                Meeor.call('addRole', userId);
            }
        });
    },
    render() {
        return (
            <div className="col-xs-12 col-sm-6">
                <h1>Register for NinjaTracker</h1>
                <form id="register-form" action="#" onSubmit={this.register}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="firstName" id="firstName" name="firstName" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="lastName" id="lastName" name="lastName" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        );
    }
});

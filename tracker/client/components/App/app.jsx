App = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            loggedIn: !!Meteor.user()
        };
    },
    showLayout() {
        if (this.props.content.props.name == 'Request') {
            return (
                <div className="col-xs-12 col-sm-6 col-sm-offset-3 t
    ext-center">
                    {this.props.content}
                </div>
            );
        } else {
            return (
                <div className="row">
                    <div className="col-xs-3">
                        {this.props.nav}
                    </div>
                    <div className="col-xs-9">
                        {this.props.content}
                    </div>
                </div>
            );
        }
    },
    showLogin() {
        return (
            <div className="row">
                <div className="col-xs-12 text-center">
                    <p>You must be logged in to do that.</p>
                </div>
                <Login/>
            </div>
        );
    },
    allowedLayout() {
    var allowedLayouts = ['Request', 'Login'];
    var layoutAllowed = false;
        if ($.inArray(this.props.content.props.name, allowedLayouts) > -1 || this.data.loggedIn) {
            layoutAllowed = true;
        }
        return layoutAllowed;
    },
    render() {
        return (
          <div className="container-fluid main-container">
            <div className="row">
              { this.allowedLayout() ? this.showLayout() : this.showLogin() }
            </div>
          </div>
) }
});

Dashboard = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        Meteor.subscribe('ninjas');
        return {
            ninjas: Ninjas.find({status: true}).fetch()
        };
    },
    ninjaSelect() {
        return this.data.ninjas.map((ninja) => {
            return <option key={ninja._id} value={ninja._id}>{ninja.fullName()}</option>;
        });
    },
    showAssignNinja(e) {
        e.preventDefault();
        $(e.target).hide();
        $(e.target).next().show();
    },
    assignNinja(e) {
        e.preventDefault();
        var ninja = $('#ninjas option:selected').val();
        var request = this.props.request._id;
        Meteor.call('assignNinja', ninja);
        Meteor.call('updateRequest', request);
    },
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <Available/>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <Busy/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <RequestsComponent/>
                    </div>
                </div>
            </div>
        );
    }
});

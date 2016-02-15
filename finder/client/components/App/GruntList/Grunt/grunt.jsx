Grunt = React.createClass({
    render() {
        return (
            <div className="col-xs-12 col-sm-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3>Grunt Name</h3>
                    </div>
                    <div className="panel-body">
                        <h4>Current Status: Unvailable</h4>
                        <h4>Current Pies: 3</h4>
                        <h4>Pies Baked: 7</h4>
                    </div>
                    <div className="panel-body">
                    <a href="/services"><button type="button" className="btn btn-info">Show More Details</button></a>
                    </div>
                </div>
            </div>
        );
    }
});

NewNinja = React.createClass({
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>Add Ninja</h1>
                        <form id="new-ninja-form" action="#">
                            <div className="form-group">
                                <label htmlFor="first_name">First Name:</label>
                                <input type="text" id="first_name" name="first_name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name:</label>
                                <input type="text" id="last_name" name="last_name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Add Ninja</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

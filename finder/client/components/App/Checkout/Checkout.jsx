Checkout = React.createClass({

    renderContact() {
    if(processing){
        <p className="alert alert-warning">
            <i className="fa fa-refresh fa-spin"></i>
            Processing payment...</p>;
    }else{
        <div>
        <p className="alert alert-info">We offer the following paranormal elimination services:</p>

        <ul className="list-group price-list">
            <li className="list-group-item clearfix">
                <p className="pull-left">
                    <strong>$3,000</strong>
                    &mdash; Full Torso Apparition Removal</p>
                <a href="#" data-service="full-torso-apparition" className="btn btn-success pull-right">Buy Now</a>
            </li>
            <li className="list-group-item clearfix">
                <p className="pull-left">
                    <strong>$4,250</strong>
                    &mdash; Free-Floating Repeater Removal</p>
                <a href="#" data-service="free-floating-repeater" className="btn btn-success pull-right">Buy Now</a>
            </li>
            <li className="list-group-item clearfix">
                <p className="pull-left">
                    <strong>$5,000</strong>
                    &mdash; Full Roaming Vapor Removal</p>
                <a href="#" data-service="full-roaming-vapor" className="btn btn-success pull-right">Buy Now</a>
            </li>
        </ul>

        <p className="alert alert-warning">To demo, use any email address along with the card number
            <strong>4242 4242 4242 4242</strong>, any
            <em>future</em>
            expiration date, and any 3 digit security code (e.g 555)</p>
    </div>;
    }
  },

    render() {
        return (
            <div className="row">
                <div classNameName="col-xs-12 col-md-6">
                    <img width="150" src="https://tmc-post-content.s3.amazonaws.com/ghostbusters-logo.png" alt="Ghostbusters"/>
                        <h4 className="page-header">We're ready to believe you!</h4>
                        {this.renderContact()}
                    </div>
                </div>
            );
        }
    });

Grunt = React.createClass({
    handleClick: function(event) {
        'click [data-service]' ( event, template ) {
          const pricing = {
            'full-torso-apparition': {
              amount: 300000,
              description: "Full Torso Apparition Removal"
            },
            'free-floating-repeater': {
              amount: 425000,
              description: "Free-Floating Repeater Removal"
            },
            'full-roaming-vapor': {
              amount: 500000,
              description: "Full Roaming Vapor Removal"
          },
            'connect': {
              amount: 1,
              description: "Connect"
            }
          };

          let service = pricing[ event.target.dataset.service ];

          template.selectedService.set( service );
          template.processing.set( true );

          template.checkout.open({
            name: 'Ghostbusting Service',
            description: service.description,
            amount: service.amount,
            bitcoin: true
          });
        }
 },
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
                        <h4>Email: revelaed</h4>
                    </div>
                    <div className="panel-body">
                    <a onClick={this.handleClick} data-service="connect"><button type="button" className="btn btn-info" >Show More Details</button></a>
                    </div>
                </div>
            </div>
        );
    }
});

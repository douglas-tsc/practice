Nav = React.createClass({
    mixins: [ReactMeteorData],
   getMeteorData() {
       return {
           loggedIn: !!Meteor.user()
       };
   },
   logout() {
       Meteor.logout(function(err) {
           FlowRouter.go('/login');
       });
   },
   getLoginLink() {
       if (this.data.loggedIn) {
           return <li>
               <a onClick={this.logout} href="#">Logout</a>
           </li>;
       } else {
           return <li>
               <a href="/login">Login</a>
           </li>;
       }
   },
    render() {
        return (
            <ul className="nav nav-pills nav-stacked">
                <li>
                    <a href="/">Dashboard</a>
                </li>
                <li>
                    <a href="/newGrunt">New Grunt</a>
                </li>
                <li>
                    <a href="/grunts">List Grunts</a>
                </li>
                {this.getLoginLink()}
            </ul>
        );
    }
});

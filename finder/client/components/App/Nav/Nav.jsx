Nav = React.createClass({
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
                    <li><a href="/grunts">List Grunts</a></li>
                </li>
            </ul>
        );
    }
});

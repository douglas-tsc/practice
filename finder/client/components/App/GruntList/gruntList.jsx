GruntList = React.createClass({
    renderGrunts() {
        return <Grunt/>
    },
    render() {
        return (
            <div className="row">
                {this.renderGrunts()}
            </div>
        )
    }
});

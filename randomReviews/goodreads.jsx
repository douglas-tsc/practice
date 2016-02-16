goodreads = React.createClass({

    renderReview() {
        return [
            $.getJSON("https://www.goodreads.com/search.xml?key=MBLTFc5vDy8XiPleZmsDfg&q=Ender%27s+Game", function(json) {
  $(".message").html(JSON.stringify(json));
})
];
    },

    render() {
        return (
            <div className="container">
                <p>
                    {this.renderReview()}
                </p>
                <p className='message'>
                </p>
            </div>
        );
    }

});

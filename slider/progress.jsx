/*jshint esversion: 6 */

Progress = React.createClass({
  render() {
    return <div className="react-progress-example">
      <input
        ref="range"
        type="range"
        min="0"
        max="100"
        defaultValue={ this.state.value }
        onChange={ this.setValue }
      />
      <ProgressBar current={ this.state.value } total="100" />
    </div>;
  }
});

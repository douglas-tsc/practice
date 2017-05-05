
import React, { Component} from 'react';

class YourTable extends Component {
  render () {
    return (
      <div>
        <h1>Welcome to your table</h1>
        <button onClick={this.props.orderFood}>Order Some Fancy Food 🥑 </button>
        <br />
        <br />
        <div>
        Items ordered: {this.props.value}
        </div>
      </div>
    );
  }}

export default YourTable;

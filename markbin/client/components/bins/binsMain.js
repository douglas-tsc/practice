import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import BinsEditor from './binEditor';
import BinsViewer from './binsViewer';

class BinsMain extends Component {
  render () {
    if(!this.props.bin) {
      return <p>Loading...</p>
    }
    return (
      <div>
        <BinsEditor bin={this.props.bin} />
        <BinsViewer bin={this.props.bin} />
      </div>
    );
  }
}

export default createContainer((props) => {
  const { binId } = props.params;
  Meteor.subscribe('bins');
  return {bin: Bins.findOne(binId)};
}, BinsMain);

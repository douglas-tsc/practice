import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import BinsEditor from './binEditor';

class BinsMain extends Component {
  render () {
    return (
      <div>
        <BinsEditor bin={this.props.bin} />
      </div>
    );
  }
}

export default createContainer((props) => {
  const { binId } = props.params;
  Meteor.subscribe('bins');
  return {bin: Bins.findOne(binId)};
}, BinsMain);

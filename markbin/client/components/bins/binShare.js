import React, { Component } from 'react';

class BinShare extends Component {
  onShareClick () {
    const email = this.refs.email.value;
    Meteor.call('bins.share', this.props.bin, email);
  }
  renderShareList () {
    return this.props.bin.sharedWith.map(email => {
      return <button key={email} className='btn btn-default'>{email}</button>;
    });
  }
  render () {
    return (
      <footer className='binShare'>
        <div className='input-group'>
          <input ref='email' className='form-control' />
          <div className='input-group-btn' >
            <button className='btn btn-default' onClick={this.onShareClick.bind(this)}>
              Share Bin
            </button>
          </div>
        </div>
        <div>
          Shared With:
        </div>
        <div className='btn-group'>
          {this.renderShareList()}
        </div>
      </footer>
    );
  }
}

export default BinShare;

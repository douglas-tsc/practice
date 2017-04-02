import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';

class BookDetail extends Component {
  render () {
    if (!this.props.book) {
      return (<div>Select a book to see who wrote it.</div>);
    }
    return (
      <div>{this.props.book.author}</div>
    );
  }
}

function mapStateToProps (state) {
  return {
    book: state.activeBooks
  };
}

export default connect(mapStateToProps)(BookDetail);

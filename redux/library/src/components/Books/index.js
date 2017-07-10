import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Book from '../shared/Book.js'
import * as bookActions from './actions.js'
import Plus from '../../images/Plus.js'

class Books extends Component {
  componentDidMount() {
    this.props.actions.requestApi
  }

  render() {
    const Bookies = this.props.state.books.map((book, index) =>
      <Book
        state={this.props.state}
        key={index}
        remove={this.props.actions.DeleteBook}
        edit={this.props.actions.editBook}
      />
    )
    return (
      <div className="flex col cxc">
        <div className="mv5">
          <div onClick={this.props.actions.AddBook}><Plus /></div>
        </div>
        <div className="flex wrap">
          {Bookies}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(bookActions, dispatch)
})

const BookList = connect(mapStateToProps, mapDispatchToProps)(Books)
export default BookList

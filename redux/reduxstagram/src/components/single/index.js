import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from './actions'
import { Link } from 'react-router-dom'
import { ButtonCircle } from 'rebass'

class Post extends Component {
  render () {
    return (
      <Link
        className='db center mw5 black link dim'
        to='/'>
        <img
          className='db ba b--black-10'
          alt={this.props.title}
          src={this.props.src}
        />
        <div className='flex justify-between'>
          <dl className='mt2 f6 lh-copy'>
            <dt className='clip'>
            Caption</dt>
            <dd className='ml0 fw9'>{this.props.title}</dd>
          </dl>
          <ButtonCircle title='Like'>
            {this.props.likes}
          </ButtonCircle>
        </div>
      </Link>
    )
  }}

function mapStateToProps (state, ownProps) {
  return {
    comments: state.comments,
    title: ownProps.caption,
    src: ownProps.src
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)

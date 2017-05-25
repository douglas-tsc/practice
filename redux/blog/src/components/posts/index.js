import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from './actions.js'

class PostsIndex extends Component {

  componentDidMount () {
    this.props.fetchPosts()
  }

  render () {
    return (
      <div>
        <h2>Posts</h2>
        <ul>{Object.keys(this.props.posts).map((post, index) => <li key={index}>{this.props.posts[post].title}</li>)}</ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { posts: state.posts}
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)

import React, { Component } from 'react'
import {connect} from 'react-redux'
import Post from '../single'

class App extends Component {
  render () {
    return (
      <div>
        <h2 className='tc'>Reduxstagram</h2>
        <div className='flex flex-wrap'>
          {this.props.posts.map((post, index) => <Post key={index} caption={post.caption}
            src={post.display_src}
            likes={post.likes} />)}</div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

        // function mapDispatchToProps (dispatch) {
          //   return bindActionCreators(actionCreators, dispatch)
          // }

export default connect(mapStateToProps, null)(App)

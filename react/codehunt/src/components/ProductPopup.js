import React, { Component } from 'react';
import Popup from './Popup';

class ProductPopup extends Component {
  constructor () {
    super();
    this.state = {
      product: {
        id: 2,
        name: 'Code4Startup',
        link: 'https://code4startup.com',
        media: '/img/code4startup.jpeg',
        upvote: 278,
        description: 'Code for starups',
        maker: {
          name: 'leo',
          avatar: '/img/leo.jpeg'
        }
      },
      comments: [
        {
          name: 'Leo',
          avatar: '/img/leo.jpeg',
          content: 'I love comments'
        },{
          name: 'John',
          avatar: '/img/hieu.jpeg',
          content: 'I love this product'
        }
      ]
    };
  }
  handlePost = () => {

  }
  renderUpvoteButton () {
    return (
      <a className='upvote-button' href='#'><span><i className='fa fa-sort-asc'></i></span> {this.state.product.upvote}</a>
    );
  }
  renderHeader () {
    return(
      <header style={{backgroundImage:'url('+this.state.product.media + ')'}}>
        <section className="header-shadow">
          <h1>{this.state.product.name}</h1>
          <p>{this.state.product.description}</p>
          <section>
            {this.renderUpvoteButton ()}
            <a href={this.state.product.link} target='_blank' className="getit-btn">Get It</a>
          </section>
        </section>
      </header>
    )
  }
  renderBodyDiscussion () {
    return(
      <section className="discussion">
        <h2>Discussion</h2>
        <section className="post-comment">
          <img src="/img/leo.jpeg" alt="" className="medium-avatar"/>
          <input type="text" placeholder='what do you think of this product'/>
        </section>
        {this.renderComments()}
      </section>
    )
  }
  renderBody () {
    return(
      <section className="product-popup-body">
        <main>
          {this.renderBodyDiscussion()}
        </main>
      </section>
    )}
  renderComments () {
    return(
      <ul className="comment-list">
        {
          this.state.comments.map((comment, idx)=> {
            return (
              <li key={idx}>
                <img src={comment.avatar} alt="" className="medium-avatar"/>
                <section>
                  <strong>{comment.name}:</strong>
                  <p>{comment.content}</p></section>
              </li>
            )
          })
        }
      </ul>
    )}
  render () {
    return (
      <Popup {...this.props} style='product-popup'>
        <h2>
          {this.renderHeader()}
          {this.renderBody()}
        </h2>
      </Popup>
    );
  }
}

export default ProductPopup;

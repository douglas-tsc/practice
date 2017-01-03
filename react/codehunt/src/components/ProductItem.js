import React, { Component } from 'react';
import ProductPopup from './ProductPopup';

class ProductItem extends Component {
  constructor () {
    super();
    this.state = {
      productPopupStatus: false
    };
  }
  showProductPopup = () => {
    this.setState ({
      productPopupStatus: true
    })
  }
  hideProductPopup = () => {
    this.setState ({
      productPopupStatus: false
    })
  }
  renderUpvoteButton () {
    return (
      <a className='upvote-button' href='#'><span><i className='fa fa-sort-asc'></i></span> {this.props.upvote}</a>
    );
  }
  renderInfoSession () {
    return (
      <div>
        <a href='#' onClick={this.showProductPopup}><h2>{this.props.name}</h2></a>
        <p>
          {this.props.description}
        </p>
        <a href='#'><img className='small-avatar' src={this.props.maker.avatar} alt='' /></a>
      </div>
    );
  }
  renderNewWindowIcon () {
    return (
      <a className='product-item-link' href={this.props.link}><span><i className='fa fa-external-link'></i></span></a>
    );
  }
  render () {
    return (
      <li className='product-item'>
        {this.renderUpvoteButton()}
        <img className='product-item-media' src={this.props.media} alt='' />
        <section className='product-item-info'>
          {this.renderInfoSession()}
        </section>
        {this.renderNewWindowIcon()}
        <ProductPopup status={this.state.productPopupStatus} hidePopup={this.hideProductPopup}/>
      </li>
    );
  }
}

export default ProductItem;

import React, { Component } from 'react';

export class Link extends Component {
  static propTypes = {
    to: React.PropTypes.string.isRequired
  };

  static contextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }

  handleClick = (e) => {
    e.preventDefault();
    this.context.linkHandler(this.props.to);
  }
  render () {
    const activeClass = this.context.route === this.props.to ? 'b' : '';
    return (
      <a href='#' className={activeClass} onClick={this.handleClick}>{this.props.children}</a>
    );
  }
}

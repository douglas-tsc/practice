import React, { Component } from 'react';

const getCurrentpath = () => {
  const path = document.location.pathname;
  return path.substring(path.lastIndexOf('/'));
};

export class Router extends Component {
  state = {
    route: getCurrentpath()
  }

  handleLinkClick = (route) => {
    this.setState({route});
    history.pushState(null, '', route);
  }

  static childContextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }
  getChildContext () {
    return {
      route: this.state.route,
      linkHandler: this.handleLinkClick
    };
  }

  componentDidMount () {
    window.onpopstate = () => {
      this.setState({ route: getCurrentpath()})
    }
  }
  render () {
    return (
      <div>{this.props.children}</div>
    );
  }
}

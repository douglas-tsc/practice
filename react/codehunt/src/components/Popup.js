import React, { Component } from 'react';

class Popup extends Component {
  renderPopupContent () {
    return (
      <section className='popup'>
        <section className='popup-wrap'>
          <img src='/img/close.png' alt='close popup' onClick={this.props.hidePopup} />
        </section>
        <section className={'popup-content ' + this.props.style}>
          <section>
            {this.props.children}
          </section>
        </section>
      </section>
    );
  }

  render () {
    return (
      <section>
        {this.props.status ? this.renderPopupContent() : null}
      </section>
    );
  }
}

export default Popup;

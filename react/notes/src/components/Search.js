import React, { Component } from 'react';

class Search extends Component {

  handleSubmit (e) {
    e.preventDefault();
    const username = this.search.value;
    this.search.value = '';
    this.props.history.push(`/profile/${username}`);
  }

  render () {
    return (
      <form className='dib bg-black-red w-100 center br2-ns ba b--black-10' onSubmit={this.handleSubmit.bind(this)}>
        <input className='f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns' placeholder='Find Someone on Github' type='text' name='email-address' ref={(input) => { this.search = input; }} />
        <input className='f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns' type='submit' value='Search' />
      </form>
    );
  }
}

export default Search;

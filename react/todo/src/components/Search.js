import React, { Component } from 'react';

class Search extends Component {
  handleSearch () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;
    this.props.onSearch(showCompleted, searchText);
  }
  render () {
    return (
      <form>
        <input type='search' ref='searchText' onChange={this.handleSearch} />
        <div>
          <label>
            <input type='checkbox' ref='showCompleted' onChange={this.handleSearch} />Show Completed
          </label>
        </div>
      </form>
    );
  }
}

export default Search;

import React, { Component } from 'react';

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

const isSearched = (query) => (item) => !query || item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;

class App extends Component {

  constructor (props) {
    super (props);
    this.state = {
      result: null,
      query: DEFAULT_QUERY
    };
    this.setSearchTopstories = this.setSearchTopstories.bind(this);
    this.fetchSearchTopstories = this.fetchSearchTopstories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  setSearchTopstories (result) {
    this.setState({ result });
  }

  fetchSearchTopstories ( query ) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${query}`).then(response => response.json())
    .then(result => this.setSearchTopstories(result));
  }

  componentDidMount() {
    const { query } = this.state;
    this.fetchSearchTopstories(query);
  }

  onSearchChange(event) {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    const { query, result } = this.state;

    return (
      <div className="page">
        <div className="interactions">
        <Search value={query} onChange={this.onSearchChange}>
        Search</Search>
        </div>
        { result ? <Table list={result.hits} pattern={query} /> : null }
      </div>
    );
  }
}

const Search = ({ value, onChange, children }) => <form> {children} <input type='text' value={value} onChange={onChange} /></form>;

const Table = ({ list, pattern }) => <div className='table'> {list.filter(isSearched(pattern)).map((item) => <div key={item.objectID} className='table-row'>
    <span><a href={item.url}>{item.title}</a></span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </div>)}
</div>;


export default App;

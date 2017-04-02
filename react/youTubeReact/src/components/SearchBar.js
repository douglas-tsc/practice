import React, {
Component
} from 'react';

export default class SearchBar extends Component {

  constructor (props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange (term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render () {
    return (
      <div className='ma4'>
        <input
          type='text'
          onChange={e => this.onInputChange(e.target.value)} value={this.state.term}
          placeholder='Search here...' />
      </div>
    );
  }

}

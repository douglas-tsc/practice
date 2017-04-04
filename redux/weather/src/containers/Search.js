import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class Search extends Component {

  constructor (props) {
    super(props);
    this.state = {
      search: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange (e) {
    this.setState({search: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.search);
    this.setState({search: ''});
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Search for a city' value={this.state.search}
          onChange={this.handleInputChange} />
      </form>
    );
  }

}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);

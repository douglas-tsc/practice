import React from 'react';

class Messages extends React.Component {
  constructor () {
    super();
    this.state = {
      publicMsg: 'hey'
    };
  }

  componentWillMount () {
    // public http request
    fetch('http://localhost:3001/api/public')
      .then(response => response.json())
      .then(response => this.setState({publicMsg: response.message}));
  }

  render () {
    return (
      <div>
        <p>
          {this.state.publicMsg}
        </p>
      </div>
    );
  }
}

export default Messages;

import React from 'react';

class Messages extends React.Component {
  constructor () {
    super();
    this.state = {
      tutorials: []
    };
  }

  componentWillMount () {
    // public http request
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(response =>
        this.setState({tutorials: response})
      );
  }

  render () {
    const tutorials = this.state.tutorials.map(tut => <li>{tut.text}</li>);
    return (
      <div>
        <ul>
          {tutorials}
        </ul>
      </div>
    );
  }
}

export default Messages;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-toggle/style.css';
import Toggle from 'react-toggle';

class Toggl extends Component {
  static defaultProps = { onToggle: on => {} };
  state = {
    on: false
  };
  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );

  render() {
    return this.props.render({ on: this.state.on, toggle: this.toggle });
  }
}

class App extends Component {
  render() {
    return (
      <Toggl
        onToggle={on => console.log(on)}
        render={({ on, toggle }) => (
          <div>
            <Toggle checked={on} onClick={toggle} />
            <div>{on ? 'on' : 'off'}</div>
          </div>
        )}
      />
    );
  }
}

export default App;

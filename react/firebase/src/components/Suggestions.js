import React from 'react';
import { db } from '../firebase';

export default class Suggestions extends React.Component {
  state = {
    suggestions: null,
    error: null,
    selected: 'name'
  };
  componentDidMount() {
    this.hydrateData();
  }

  hydrateData() {
    db
      .collection('suggestions')
      .orderBy(this.state.selected)
      .onSnapshot(col => {
        const suggestions = [];
        col.forEach(student => suggestions.push(student.data()));
        this.setState({ suggestions });
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    db.collection('suggestions').add({
      name: this.textInput.value,
      time: new Date()
    });
  };

  handleOptionChange = e => {
    this.setState({ selected: e.target.value }, () => this.hydrateData());
  };

  render() {
    return (
      <div className="w-50 dib">
        <fieldset className="w-50 center">
          <legend>Organise by</legend>
          <input
            type="radio"
            id="notify-on"
            name="notify"
            value="name"
            checked={this.state.selected === 'name'}
            onChange={this.handleOptionChange}
          />
          <label for="notify-on">Name</label>
          <input
            type="radio"
            id="notify-off"
            name="notify"
            value="time"
            checked={this.state.selected === 'time'}
            onChange={this.handleOptionChange}
          />
          <label for="notify-off">Time</label>
        </fieldset>
        <ul className="App-intro">
          {this.state.suggestions &&
            this.state.suggestions.map(doc => (
              <li>
                {doc.name} - {doc.time && doc.time.toTimeString()}
              </li>
            ))}
        </ul>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            ref={input => {
              this.textInput = input;
            }}
          />
          <button type="submit">Add Suggestion</button>
        </form>
      </div>
    );
  }
}

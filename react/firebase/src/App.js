import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { db } from './firebase';
import Suggestions from './components/Suggestions';

class App extends Component {
  state = {
    bootcamp: null,
    students: null,
    error: null
  };
  componentDidMount() {
    db
      .doc('bootcamp/bangalore')
      .get()
      .then(doc => this.setState({ bootcamp: doc.data().name }));
    db.collection('students').onSnapshot(col => {
      const students = [];
      col.forEach(student => students.push(student.data()));
      this.setState({ students });
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    // console.log('this.textInput.value', this.textInput.value)
    // console.log('dog')
    db.collection('students').add({
      name: this.textInput.value
    });
    // db.doc('students/student2').set({ name: this.textInput.value })
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            {this.state.bootcamp && this.state.bootcamp}
          </h1>
        </header>
        <div className="w-100">
          <div className="w-50 dib">
            <ul className="App-intro">
              {this.state.students &&
                this.state.students.map(student => <li>{student.name}</li>)}
            </ul>
            <form onSubmit={e => this.handleSubmit(e)}>
              <input
                type="text"
                ref={input => {
                  this.textInput = input;
                }}
              />
              <button type="submit">Add Student</button>
            </form>
          </div>
          <Suggestions />
        </div>
      </div>
    );
  }
}

export default App;

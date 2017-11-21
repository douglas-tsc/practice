import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { db } from './firebase'

class App extends Component {
  state = {
    name: null,
    students: []
  }
  componentDidMount() {
    db
      .doc('bootcamps/bangalore')
      .get()
      .then(doc => this.setState({ name: doc.data().name }))

    // db
    //   .collection('students')
    //   .get()
    //   .then(coll => {
    //     const students = coll.docs.map(doc => doc.data().name)
    //     this.setState({ students })
    //   })

    db.collection('students').onSnapshot(coll => {
      const students = coll.docs.map(doc => doc.data())
      console.log(students)
      this.setState({ students })
    })
  }

  handleEvent = event => {
    event.preventDefault()

    // db.doc('bootcamps/bangalore').set({ name: this.titleName.value })

    // db.collection('students').add({ name: this.titleName.value })

    const newStudent = db.collection('students').doc()

    newStudent.set({ name: this.titleName.value, id: newStudent.id })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state && this.state.name}</h1>
        </header>

        <ul>
          {this.state.students &&
            this.state.students.map((student, index) => (
              <li key={index}>
                {student.name}
                <button
                  onClick={() =>
                    db
                      .collection('students')
                      .doc(`${student.id}`)
                      .delete()}
                >
                  X
                </button>
              </li>
            ))}
        </ul>

        <form onSubmit={event => this.handleEvent(event)}>
          <input type="text" ref={input => (this.titleName = input)} />
          <button>Suggest</button>
        </form>
      </div>
    )
  }
}

export default App

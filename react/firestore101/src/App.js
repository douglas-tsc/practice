import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { db } from './firebase'
import { auth, googleAuthprovider } from './firebase'
import firebase from 'firebase'

class App extends Component {
  state = {
    name: null,
    students: null,
    user: null
  }

  componentDidMount() {
    db
      .doc('bootcamps/bangalore')
      .get()
      .then(doc => this.setState({ name: doc.data().name }))

    db.collection('students').onSnapshot(coll => {
      const students = coll.docs.map(doc => doc.data())
      this.setState({ students })
    })
    auth.onAuthStateChanged(user => this.setState({ user }))
  }

  handleSubmit = e => {
    e.preventDefault()
    const newStudent = db.collection('students').doc()
    newStudent.set({
      name: this.textInput.value,
      id: newStudent.id,
      createdBy: this.state.user.uid
    })
    this.textInput.value = null
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.name}</h1>
        </header>
        <div>
          <div>
            {this.state.user ? (
              <div>
                <button onClick={() => auth.signOut()}>Logout</button>
              </div>
            ) : (
              <button onClick={() => auth.signInWithPopup(googleAuthprovider)}>
                Signup/Login
              </button>
            )}
          </div>
          <div>
            <ul>
              {this.state.students &&
                this.state.students.map((student, index) => (
                  <li key={index}>
                    {this.state.user &&
                      student.votes &&
                      Object.keys(student.votes).length}
                    {this.state.user &&
                    student.votes &&
                    Object.keys(student.votes).includes(this.state.user.uid) ? (
                      <button
                        onClick={() => {
                          db
                            .collection('students')
                            .doc(`${student.id}`)
                            .set(
                              {
                                votes: {
                                  [this.state.user
                                    .uid]: firebase.firestore.FieldValue.delete()
                                }
                              },
                              { merge: true }
                            )
                        }}
                      >
                        -1
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          this.state.user
                            ? db
                                .collection('students')
                                .doc(`${student.id}`)
                                .set(
                                  {
                                    votes: {
                                      [this.state.user.uid]: true
                                    }
                                  },
                                  { merge: true }
                                )
                            : auth.signInWithPopup(googleAuthprovider)
                        }}
                      >
                        +1
                      </button>
                    )}
                    {student.name}
                    {this.state.user &&
                      // this.state.user.uid === student.createdBy && 
                      (
                        <button
                          onClick={() =>
                            db
                              .collection('students')
                              .doc(student.id)
                              .delete()}
                        >
                          Delete Me
                        </button>
                      )}
                  </li>
                ))}
            </ul>

            <form onSubmit={e => this.handleSubmit(e)}>
              <input
                type="text"
                ref={input => {
                  this.textInput = input
                }}
              />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App

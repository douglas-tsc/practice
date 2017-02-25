import React, { Component } from 'react';
import Stats from '../components/Stats';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';
import Auth from '../Auth';

export default class Tutorials extends Component {

  constructor (props) {
    super();
    this.state = {
      tutorials: []
    };
  }

  componentWillMount () {
    fetch(`${Auth.server}`, {
      method: 'GET',
      credentials: 'include'
    })
    .then(blob => blob.json())
    .then(res =>
      this.setState({
        tutorials: res
      })
    );
  }

  render () {
    return (
      <div className='mb5'>
        <Stats />
        <main className='mw7 center'>
          <AddItem />
          <ListItem />
        </main>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ListItem from '../components/ListItem';
import mongo from '../../public/images/mongodbw.jpg';
import express from '../../public/images/expressbw.jpg';
import react from '../../public/images/reactbw.png';
import node from '../../public/images/nodejsbw.png';
import redux from '../../public/images/reduxbw.png';
import webpack from '../../public/images/webpackbw.png';
import Auth from '../Auth';
import mern from '../../public/images/mern.png';

export default class Home extends Component {

  constructor (props) {
    super();
    this.state = {
      tutorials: []
    };
  }

  componentWillMount () {
    fetch(`${Auth.server}`, {
      method: 'GET'
    })
    .then(blob => blob.json())
    .then(res =>
      this.setState({
        tutorials: res
      })
    );
  }

  render () {
    const ListItem = this.state.tutorials.map(tutorial => {
      return (<article>
        <Link className='link dt w-100 bb b--black-10 pb2 mt2 dim blue' to='/page'>
          <div className='dtc w3'>
            <img src={mern} className='db w-100' role='presentation' />
          </div>
          <div className='dtc v-top pl2'>
            <h1 className='f6 f5-ns fw6 lh-title black mv0'>{tutorial.text}</h1>
            <h2 className='f6 fw4 mt2 mb0 black-60'>by Vasansr(ES5)</h2>
            <dl className='mt2 f6'>
              <dt className='clip'>Price</dt>
              <dd className='ml0'>Free</dd>
            </dl>
          </div>
        </Link>
      </article>
      );
    });

    return (
      <main className='mw7 center mb5'>
        <div className='flex justify-between mb5'>
          <img src={mongo} width='100px' height='100%' role='presentation' />
          <img src={express} width='100px' height='100%' role='presentation' />
          <img src={react} width='100px' height='100%' role='presentation' />
          <img src={node} width='100px' height='100%' role='presentation' />
          <img src={redux} width='100px' height='100%' role='presentation' />
          <img src={webpack} width='100px' height='100%' role='presentation' />
        </div>
        {ListItem}
      </main>
    );
  }
}

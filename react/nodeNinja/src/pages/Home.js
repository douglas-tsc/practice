import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import ListItem from '../components/ListItem';
import mongo from '../../public/images/mongodbw.jpg';
import express from '../../public/images/expressbw.jpg';
import react from '../../public/images/reactbw.png';
import node from '../../public/images/nodejsbw.png';
import redux from '../../public/images/reduxbw.png';
import webpack from '../../public/images/webpackbw.png';

export default class Home extends Component {
  render () {
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
        <ListItem />
        <ListItem />
        <ListItem />
      </main>
    );
  }
}

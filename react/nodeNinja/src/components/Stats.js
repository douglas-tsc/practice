import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default class Stats extends Component {
  render () {
    return (
      <article className='pa3 pa5-ns' data-name='slab-stat'>
        <h1>Today</h1>
        <dl className='dib mr5'>
          <dd className='f6 f5-ns b ml0'>Closed Issues</dd>
          <dd className='f3 f2-ns b ml0'>1,024</dd>
        </dl>
        <dl className='dib mr5'>
          <dd className='f6 f5-ns b ml0'>Open Issues</dd>
          <dd className='f3 f2-ns b ml0'>993</dd>
        </dl>
        <dl className='dib mr5'>
          <dd className='f6 f5-ns b ml0'>Next Release</dd>
          <dd className='f3 f2-ns b ml0'>10-22</dd>
        </dl>
        <dl className='dib mr5'>
          <dd className='f6 f5-ns b ml0'>Days Left</dd>
          <dd className='f3 f2-ns b ml0'>4</dd>
        </dl>
        <dl className='dib mr5'>
          <dd className='f6 f5-ns b ml0'>Favorite Cat</dd>
          <dd className='f3 f2-ns b ml0'>All of Them</dd>
        </dl>
        <dl className='dib'>
          <dd className='f6 f5-ns b ml0'>App Downloads</dd>
          <dd className='f3 f2-ns b ml0'>1,200</dd>
        </dl>
      </article>
    );
  }
}

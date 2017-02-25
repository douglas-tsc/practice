import React, { Component } from 'react';

export default class Stats extends Component {
  render () {
    return (
      <article className='ph3 ph5-ns pb3 pb5-ns' data-name='slab-stat-large'>
        <div className='bb'>
          <dl className='dib mr5'>
            <dd className='f6 f5-ns b ml0'>Total Tutorials</dd>
            <dd className='f3 f2-ns b ml0'>12</dd>
          </dl>
          <dl className='dib mr5'>
            <dd className='f6 f5-ns b ml0'>Full Stack Tutorials</dd>
            <dd className='f3 f2-ns b ml0'>3</dd>
          </dl>
        </div>
        <div className='flex justify-between'>
          <dl className='db dib-l w-auto-l lh-title mr6-l'>
            <dd className='f6 fw4 ml0'>Mongo</dd>
            <dd className='f2 f-subheadline-l fw6 ml0'>3</dd>
          </dl>
          <dl className='db dib-l w-auto-l lh-title mr6-l'>
            <dd className='f6 fw4 ml0'>Express</dd>
            <dd className='f2 f-subheadline-l fw6 ml0'>4</dd>
          </dl>
          <dl className='db dib-l w-auto-l lh-title mr6-l'>
            <dd className='f6 fw4 ml0'>React/Redux</dd>
            <dd className='f2 f-subheadline-l fw6 ml0'>3</dd>
          </dl>
          <dl className='db dib-l w-auto-l lh-title mr6-l'>
            <dd className='f6 fw4 ml0'>Node</dd>
            <dd className='f2 f-subheadline-l fw6 ml0'>11</dd>
          </dl>
        </div>
      </article>

    );
  }
}

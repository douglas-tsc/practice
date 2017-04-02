import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AddItem extends Component {
  render () {
    return (
      <article>
        <Link className='link dt w-100 bb b--black-10 pb2 mt2 dim blue' to='/Edit'>
          <div className='dtc v-mid  pl2'>
            <h1 className='f6 f5-ns fw6 lh-title black mv0 tc'>+ Add a New Tutorial</h1>
          </div>
        </Link>
      </article>
    );
  }
}

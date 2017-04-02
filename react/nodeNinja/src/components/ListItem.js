import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mern from '../../public/images/mern.png';

export default class ListItem extends Component {
  render () {
    return (
      <article>
        <Link className='link dt w-100 bb b--black-10 pb2 mt2 dim blue' to='/page'>
          <div className='dtc w3'>
            <img src={mern} className='db w-100' role='presentation' />
          </div>
          <div className='dtc v-top pl2'>
            <h1 className='f6 f5-ns fw6 lh-title black mv0'>Build a complete React app, step-by-step with the MERN stack </h1>
            <h2 className='f6 fw4 mt2 mb0 black-60'>by Vasansr(ES5)</h2>
            <dl className='mt2 f6'>
              <dt className='clip'>Price</dt>
              <dd className='ml0'>Free</dd>
            </dl>
          </div>
        </Link>
      </article>
    );
  }
}

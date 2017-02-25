import React, { Component } from 'react';
import mern from '../../public/images/mern.png';
import mongo from '../../public/images/mongodbw.jpg';
import express from '../../public/images/expressbw.jpg';
import react from '../../public/images/reactbw.png';
import node from '../../public/images/nodejsbw.png';

export default class Page extends Component {

  render () {
    const divStyle = {
      backgroundImage: 'url(' + mern + ')',
      backgroundSize: 'no-repeat center center fixed cover'
    };
    return (
      <article data-name='article-full-bleed-background'>
        <div className='cf' style={divStyle}>
          <div className='fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times'>
            <header className='bb b--black-70 pv4'>
              <h3 className='f2 fw7 ttu tracked lh-title mt0 mb3 avenir'>Build a complete React app, step-by-step with the MERN stack</h3>
              <h4 className='f3 fw4 i lh-title mt0'>by Vasansr</h4>
            </header>
            <div className='flex justify-between mv4 measure'>
              <img src={mongo} width='20%' height='100%' role='presentation' />
              <img src={express} width='20%' height='100%' role='presentation' />
              <img src={react} width='20%' height='100%' role='presentation' />
              <img src={node} width='20%' height='100%' role='presentation' />
            </div>
            <section className='pt5 pb4'>
              <p className='times lh-copy measure f4 mt0'>
          This is a step-by-step tutorial that will help you get up to speed with React quickly, and also build a complete app with the MERN (Mongo-Express-React-Node) stack. You will also learn other tools that you typically use to build an app: Gulp, Browserify, Material-UI and React-Bootstrap.
        </p>

              <a href='' className='ttu times f4'>Source Code</a>
              <br />
              <br />
              <a href='' className='ttu times f4'>Working Demo</a>
            </section>
          </div>
        </div>
      </article>
    );
  }
}

import React from 'react';
import mern from '../public/images/mern.png';
import AuthService from './utils/AuthService';
import {Redirect} from 'react-router-dom';

const auth = new AuthService('erkEIgY6SdjJWODOCH9sKomBr15dxp7Z', 'joshpitzalis.eu.auth0.com');

class Edit extends React.Component {
  constructor () {
    super();
    this.state = {
      redirectToReferrer: false,
      image: mern,
      title: 'Title',
      author: 'Author',
      link: 'link',
      id: auth.getProfile().user_id
    };
  }

  handleChange = (e) => {
    let target = e.target.name;
    let value = e.target.value;
    let obj = {};
    obj[target] = value;
    this.setState(obj);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {image, title, author, link, id} = this.state
    auth.fetch(`http://localhost:3001/api/add?image=${image}&title=${title}&author=${author}&link=${link}&id=${id}`,
      {method: 'POST'})
      .then(this.setState({ redirectToReferrer: true }))
      .catch(error => console.log('Request failed', error));
  }

  render () {

    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div className='flex flex-wrap justify-center '>
        <article className='w5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 mh5'>
          <div className='tc'>
            <img src={this.state.image} className='h4 w4 dib ba b--black-05 pa2' title={this.state.title} alt={this.state.title}/>
            <h1 className='f3 mb2 truncate'>{this.state.title}</h1>
            <h2 className='f5 fw4 gray mt0 truncate'>{this.state.author}</h2>
            <a href={this.state.link} target="_blank" className='f5 fw4 gray mt0 truncate'>Click to Tutorial</a>
          </div>
        </article>
        <form
          onSubmit={this.handleSubmit}
          className='mh5'>
          <div>
            <p>Image URL:<input type='url' name='image' onChange={this.handleChange} placeholder='Refresh page to reset' /></p>
            <p>Title:<input type='text' name='title' onChange={this.handleChange} /></p>
            <p>Author:<input type='text' name='author' onChange={this.handleChange} /></p>
            <p>Link:<input type='url' name='link' onChange={this.handleChange} /></p>
          </div>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default Edit;

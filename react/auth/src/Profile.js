import React from 'react';
import AuthService from './utils/AuthService';
import {Link} from 'react-router-dom';

const auth = new AuthService('erkEIgY6SdjJWODOCH9sKomBr15dxp7Z', 'joshpitzalis.eu.auth0.com');

class Messages extends React.Component {
  constructor () {
    super();
    this.state = {
      tutorials: [],
      user: auth.getProfile()
    };
  }

  componentWillMount () {
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(response =>
        this.setState({tutorials: response})
      );
  }

  render () {
    const tutorials = this.state.tutorials
    .filter(tut => tut.id === this.state.user.user_id)
    .map((tut, index) => <Link to={{
      pathname: '/edit',
      state: tut
    }} key={index} className='w5 bg-white br3 pa3 pa4-ns ma1 ba b--black-10' tutorial={tut}>
      <div className='tc'>
        <img src={tut.image} className='h4 w4 dib ba b--black-05 pa2' title={tut.title} alt={tut.title} />
        <a href={tut.link} target='_blank'><h1 className='f3 mb2 truncate'>{tut.title}</h1></a>
        <h2 className='f5 fw4 gray mt0 truncate'>{tut.author}</h2>
      </div>
    </Link>);

    return (
      <div>
        <p>hello {this.state.user.nickname}</p>
        <Link to='/edit'><button>+ Add Tutorial</button></Link>
        <div className='flex flex-wrap justify-center mt4'>
          {tutorials}
        </div>
      </div>
    );
  }
}

export default Messages;

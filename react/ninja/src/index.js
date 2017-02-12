import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Tweets from './Tweets';
import NotFound from './NotFound';
import './index.css';
import { BrowserRouter, Match, Miss } from 'react-router';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={App} />
        <Match pattern='/tweets/:user_Id' component={Tweets} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Root url='http://localhost:3000' />,
  document.getElementById('root')
);

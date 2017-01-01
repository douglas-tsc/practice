import React from 'react';
import { render } from 'react-dom';
import './css/style.css';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './components/app';
import NotFound from './components/notFound';
import StorePicker from './components/storePicker';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={StorePicker} />
        <Match pattern='/store/:storeId' component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
};

render(<Root />, document.querySelector('#main'));

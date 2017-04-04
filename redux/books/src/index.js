  import React from 'react';
  import ReactDOM from 'react-dom';
  import { createStore } from 'redux';
  import App from './components/app';
  import reducers from './reducers';
  import { Provider } from 'react-redux';

  ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>, document.querySelector('#root'));

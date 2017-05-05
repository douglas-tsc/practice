import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './containers/Counter';
import counter from './reducers';

const store = createStore(counter);

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);

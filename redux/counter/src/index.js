import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './containers/App';
import counter from './reducers';

const store = createStore(counter);
const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INC' })}
    onDecrement={() => store.dispatch({ type: 'DEC' })}
  />,
  rootEl
);

render();
store.subscribe(render);

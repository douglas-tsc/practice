import React from 'react';
import Order from './order';
import Inventory from './inventory';
import Header from './header';

class App extends React.Component {
  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Menu' />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;

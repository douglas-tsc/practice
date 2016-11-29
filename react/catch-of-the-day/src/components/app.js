import React from 'react';
import Order from './order';
import Inventory from './inventory';
import Header from './header';
import Fish from './fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor () {
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish (fish) {
    // copy existing state
    const fishes = {...this.state.fishes};
    // set new state.
    const timestamp = Date.now();
    // timestamp so that each one is unique
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({fishes});
  }

  loadSamples () {
    this.setState({
      fishes: sampleFishes
    });
  }

  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Menu' />
          <ul className='list-of-fishes'>
            {Object
              .keys(this.state.fishes)
              .map(key => <Fish key={key} details={this.state.fishes[key]} />)}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    );
  }
}

export default App;

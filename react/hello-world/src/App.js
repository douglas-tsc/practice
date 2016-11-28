import React from 'react';
import List from './list';
import Header from './header';
import Footer from './footer';

class App extends React.Component {
  render () {
    return <div>
       <Header />
       <ul className='list p-10'>
         <List />
       </ul>
       <Footer />
     </div>;
  }
}

export default App;

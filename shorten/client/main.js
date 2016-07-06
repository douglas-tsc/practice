import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import LinkCreate from './components/linkCreate';

const App = () => {
  return (
    <div>
      <Header />
      <LinkCreate />
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});

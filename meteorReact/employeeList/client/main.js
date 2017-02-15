import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './container/employeeList';

const App = () => {
  return (
    <EmployeeList />
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});

import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetails from './employeeDetails';

const EmployeeList = (props) => {
  return (
    <div>
      <div className='employeeList'>
        {props.employees.map(employee => <EmployeeDetails />)}
      </div>
    </div>
  );
};

export default createContainer(() => {
  Meteor.subscribe('employees');
  return {employees: Employees.find({}).fetch()};
}, EmployeeList);

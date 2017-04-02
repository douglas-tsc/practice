import React from 'react';
import Header from './header.jsx';

export default (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

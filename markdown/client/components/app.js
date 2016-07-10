import React from 'react';
import Header from './header';
import BinsList from './bins/binsList';

export default (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

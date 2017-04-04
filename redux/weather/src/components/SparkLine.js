import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average (data) {
  return data.reduce((total, amount, index, array) => {
    total += amount;
    if (index === array.length - 1) {
      return total / array.length;
    } else {
      return total;
    }
  });
}

export default (props) => {
  return (
    <div>
      <Sparklines data={props.data}>
        <SparklinesLine color={props.colour} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div><small>5 day Average<br />{average(props.data)} {props.unit}</small></div>
    </div>
  );
};

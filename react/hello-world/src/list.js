import React from 'react';

class List extends React.Component {
  render () {
    return <li className='pa3 pa4-ns bb b--black-10'>
             <b className='db f3 mb1'>alignment</b>
             <span className='f5 db lh-copy measure'>The positioning of text within the page margins. Alignment can be flush left, flush right, justified, or centered. Flush left and flush right are sometimes referred to as left justified and right justified.</span>
           </li>;
  }
}

export default List;

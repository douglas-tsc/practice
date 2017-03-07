import React, { Component } from 'react';

class AddNote extends Component {

  render () {
    return (
      <form className='pa4 black-80'
        onSubmit={(e) => this.props.addNote(e)}
        >
        <div>
          <label
            htmlFor='comment'
            className='f6 b db mb2'>Comments</label>
          <textarea
            id='comment'
            name='comment'
            className='db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2'
            aria-describedby='comment-desc'
            required ref={(input) => this.comment = input} />
          <small id='comment-desc' className='f6 black-60'>If you reach out to this developer for help or advice (or just to say thank you) then you can keep a record of it here, as context for future conversations.</small>
          <div className='mt3'><input className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6' type='submit' value='Add Comment' /></div>
        </div>
      </form>
    );
  }
}

export default AddNote;

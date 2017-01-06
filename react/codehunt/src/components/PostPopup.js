import React, { Component } from 'react';
import Popup from './Popup';

class PostPopup extends Component {

  handlePost = () => {

  }

  render () {
    return (
        <Popup {...this.props} style='post-popup'>
        <header className='post-header'>
          Post a Product
        </header>
        <section>
          <table>
            <tbody>
              <tr>
                <td>
                  Name
                </td>
                <td>
                  <input type='text' placeholder='Enter Product Name' />
                </td>
              </tr>
              <tr>
                <td>
                  Description
                </td>
                <td>
                  <input type='text' placeholder='Enter Product Description' />
                </td>
              </tr>
              <tr>
                <td>
                  Link
                </td>
                <td>
                  <input type='text' placeholder='http://www...' />
                </td>
              </tr>
              <tr>
                <td>
                  Media
                </td>
                <td>
                  <input type='text' placeholder='Enter Product Image' />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <footer className='post-footer'>
          <button inClick={this.handlePost} className='post-btn'>
            Hunt it
          </button>
        </footer>
      </Popup>
    );
  }
}

export default PostPopup;

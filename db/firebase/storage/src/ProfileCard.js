import React, { Component, PropTypes } from 'react';
import FileInput from 'react-file-input';
import { storage, database } from './firebase';
import map from 'lodash/map';

class ProfileCard extends Component {
  constructor (props) {
    super(props);
    this.storageRef = storage.ref('/user-images').child(props.uid);
    this.userRef = database.ref('/users').child(props.uid);
  }
  handleSubmit = (e) => {
    const file = e.target.files[0];
    const uploadTask = this.storageRef.child(file.name).put(file, {contentType: file.type});
    uploadTask.on('state_changed', (snapshot) => {
      console.log(Math.round(snapshot.bytesTransferred/snapshot.totalBytes * 100) + '%');
    })
    uploadTask.then((snapshot) => {
      this.userRef.child('photoURL').set(snapshot.downloadURL);
    });
  }

  render () {
    return (
      <article className='tc'>
        <img src={this.props.user.photoURL} alt={this.props.user.displayName} height='100px'/>
        <h3>
          {this.props.user.displayName}
        </h3>
        <button>Upload Spirit Animal</button>
        <FileInput
          accept='.png, .gif,.jpg'
          placeholder='select an image' onChange={this.handleSubmit}
        />
      </article>
    );
  }
}

ProfileCard.propTypes = {
  displayName: PropTypes.string,
  email: PropTypes.string,
  imageName: PropTypes.string,
  imageURL: PropTypes.string,
  photoURL: PropTypes.string,
  uid: PropTypes.string
};

export default ProfileCard;

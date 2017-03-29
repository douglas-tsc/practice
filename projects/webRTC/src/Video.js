import React, { Component, PropTypes } from 'react';
import Peer from 'peerjs';
import randomstring from 'randomstring';

export default class FileSharer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      peer: new Peer({key: this.props.opts.peerjs_key}),
      my_id: '',
      peer_id: '',
      initialized: false,
      files: []
    };
    this.handleConnect = this.handleConnect.bind(this);
  }

  componentWillMount () {
    this.state.peer.on('open', (id) => {
      console.log('My peer ID is: ' + id);
      this.setState({
        my_id: id,
        initialized: true
      });
    });

    this.state.peer.on('connection', (connection) => {
      console.log('someone connected');
      console.log(connection);
      this.setState({
        conn: connection
      }, () => {
        this.state.conn.on('open', () => {
          this.setState({
            connected: true
          });
        });
        this.state.conn.on('data', this.onReceiveData);
      });
    });
  }

  componentWillUpdate (nextProps, nextState) {
    this.state.peer.destroy();
  }

  handleConnect () {
    var peer_id = this.state.peer_id;

    var connection = this.state.peer.connect(peer_id);

    this.setState({ conn: connection }, () => {
      this.state.conn.on('open', () => {
        this.setState({
          connected: true
        });
      });

      this.state.conn.on('data', this.onReceiveData);
    });
  }

  handleSendFile (event) {
    console.log(event.target.files);
    var file = event.target.files[0];
    var blob = new Blob(event.target.files, {type: file.type});

    this.state.conn.send({
      file: blob,
      filename: file.name,
      filetype: file.type
    });
  }

  handleReceiveData (data) {
    console.log('Received', data);

    var blob = new Blob([data.file], {type: data.filetype});
    var url = URL.createObjectURL(blob);

    this.addFile({
      'name': data.filename,
      'url': url
    });
  }

  handleAddFile (file) {
    var file_name = file.name;
    var file_url = file.url;

    var files = this.state.files;
    var file_id = randomstring.generate(5);

    files.push({
      id: file_id,
      url: file_url,
      name: file_name
    });

    this.setState({
      files: files
    });
  }

  handleTextChange (event) {
    this.setState({
      peer_id: event.target.value
    });
  }

  renderNotConnected () {
    return (
      <div>
        <hr />
        <div>
          <input type='text' onChange={this.handleTextChange} />
          <label>{this.props.opts.peer_id_label || 'Peer ID'}</label>
        </div>
        <button onClick={this.handleConnect}>
          {this.props.opts.connect_label || 'connect'}
        </button>
      </div>
    );
  }

  renderConnected () {
    return (
      <div>
        <hr />
        <div>
          <input type='file' name='file' id='file' onChange={this.handleSendFile} />
          <label htmlFor='file'>+</label>
        </div>
        <div>
          <hr />
          {this.state.files.length ? this.renderListFiles() : this.renderNoFiles()}
        </div>
      </div>
    );
  }

  renderListFiles () {
    return (
      <div id='file_list'>
        <table>
          <thead>
            <tr>
              <th>{this.props.opts.file_list_label || 'Files shared to you: '}</th>
            </tr>
          </thead>
          <tbody>
            {this.state.files.map(this.renderFile, this)}
          </tbody>
        </table>
      </div>
    );
  }

  renderFile (file) {
    return (
      <tr key={file.id}>
        <td>
          <a href={file.url} download={file.name}>{file.name}</a>
        </td>
      </tr>
    );
  }

  renderNoFiles () {
    return (
      <span id='no_files_message'>
        {this.props.opts.no_files_label || 'No files shared to you yet'}
      </span>
    );
  }

  render () {
    var result;

    if (this.state.initialized) {
      result = (
        <div>
          <div>
            <span>{this.props.opts.my_id_label || 'Your PeerJS ID:'} </span>
            <strong>{this.state.my_id}</strong>
          </div>
          {this.state.connected ? this.renderConnected() : this.renderNotConnected()}
        </div>
        );
    } else {
      result = <p>Loading...</p>;
    }

    return result;
  }
}

FileSharer.propTypes = {
  opts: PropTypes.object.isRequired
};

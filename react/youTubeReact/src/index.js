import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import {VideoList} from './components/VideoList';
import {VideoDetail} from './components/VideoDetail';
import _ from 'lodash';

const API_KEY = 'AIzaSyCsyd66sA6KRTMtld5fEBrw5--jPU12fP0';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = { videos: [],
      selectedVideo: null};
    this.videoSearch('redux');
  }

  videoSearch (term) {
    YTSearch({key: API_KEY, term},
     (videos) => {
       this.setState({videos, selectedVideo: videos[0]});
     });
  }

  render () {
    const videosearch = _.debounce(term => { this.videoSearch(term); }, 300);
    return (
      <div className='tc'>
        <SearchBar onSearchTermChange={videosearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

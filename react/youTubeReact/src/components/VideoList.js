import React from 'react';
import {VideoListItem} from './VideoListItem';

export const VideoList = (props) => {
  const videoItems = props.videos.map((video, index) => {
    return <VideoListItem video={video} key={index} onVideoClick={props.onVideoSelect} />;
  });
  return (
    <div className='flex pa0'>{videoItems}</div>
  );
};

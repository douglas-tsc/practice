import React, { Component } from 'react';

export const VideoListItem = ({video, onVideoClick}) => {
  return (
    <article className='bg-white w5 center ba b--black-10' onClick={() => onVideoClick(video)}>
      <img src={video.snippet.thumbnails.default.url} className='w-100 db' alt={video.snippet.title} />
      <div className='pa3'>
        <a href='#' className='link dim lh-title'>{video.snippet.title}</a>
      </div>
    </article>
  );
};

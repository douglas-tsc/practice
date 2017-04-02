import React, { Component } from 'react';

export const VideoDetail = ({video}) => {
  if (!video) {
    return <p>Loading...</p>;
  }
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <article className='bg-white center ba b--black-10 mv4'>
      <div className='pv2 ph3'>
        <h1 className='f6 ttu tracked'>{video.snippet.title}</h1>
      </div>
      <div>
        <iframe src={url} frameborder='0' />
      </div>
      <div className='pa3'>
        <small className='gray db pv2 measure center'>{video.snippet.description}</small>
      </div>
    </article>
  );
};

import React from 'react';
import ImageDetail from './imageDetail';

const ImageList = (props) => {
  const validImages = props.images.filter(image => !image.is_album);
  const RenderedImages = validImages.map(image => <ImageDetail key={image.title} image={image} />
  );
  return (
    <ul className='media-list list-group'>
      {RenderedImages}
    </ul>
  );
};

export default ImageList;

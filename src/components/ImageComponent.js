import React from 'react';

const ImageComponent = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="Sample" />
    </div>
  );
};

export default ImageComponent;

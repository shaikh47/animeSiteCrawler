import React from 'react';

const VideoPlayer = () => {
  const videoSrc = "https://rapid-cloud.co/embed-6/TSzA5m0RKswI?z=&autoPlay=1&oa=0";
  return (
    <iframe
      src={videoSrc}
      frameborder="0"
      referrerpolicy="strict-origin"
      allow="autoplay; fullscreen; geolocation; display-capture; picture-in-picture"
      webkitallowfullscreen=""
      mozallowfullscreen=""
      style={{ width: '100%', height: '500px' }}
    ></iframe>
  );
};

export default VideoPlayer;

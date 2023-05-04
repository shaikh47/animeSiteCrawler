import React from "react";
import Test from "../src/components/Test";
import SearchComponent from "./components/SearchComponent";
import styles from "./App.css";

import homeLogo from "./assets/home.svg";

const VideoPlayer = () => {
  const videoSrc =
    "https://rapid-cloud.co/embed-6/TSzA5m0RKswI?z=&autoPlay=1&oa=0";
  return (
    // <iframe
    //   src={videoSrc}
    //   frameborder="0"
    //   referrerpolicy="strict-origin"
    //   allow="autoplay; fullscreen; geolocation; display-capture; picture-in-picture"
    //   webkitallowfullscreen=""
    //   mozallowfullscreen=""
    //   style={{ width: '100%', height: '500px' }}
    // ></iframe>
    <>
      <div style={styles} className="mainBody">
        <SearchComponent />

        <div className="icon">
          <img src={homeLogo} alt="home Logo" />
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;

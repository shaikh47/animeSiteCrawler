import React from "react";
import Test from "../src/components/Test";
import SearchComponent from "./components/SearchComponent";
import styles from "./App.css";

import homeLogo from "./assets/home.svg";

const VideoPlayer = () => {
  const videoSrc =
    "https://rapid-cloud.co/embed-6/TSzA5m0RKswI?z=&autoPlay=1&oa=0";
  return (
    <>
      <div style={styles} className="container">
        <SearchComponent />
      </div>
    </>
  );
};

export default VideoPlayer;

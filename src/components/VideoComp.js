
import React from 'react';
import styles from '../Style/new.module.css';

const VideoComponent = () => {
  return (
    <div className={styles.videoContainer}>
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/Zuwd3HUT00k/?showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwwf.panda.org&amp;widgetid=1"
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        title="Súmate a la Hora del Planeta 2023"
        id="widget2"
        data-gtm-yt-inspected-10460344_46="true"
        data-gtm-yt-inspected-10="true"
      ></iframe>
    </div>
  );
};

export default VideoComponent;

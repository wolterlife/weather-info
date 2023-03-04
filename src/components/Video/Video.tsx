import React from 'react';
import styles from './video.module.css';

function Video() {
  return (
    <div>
      <video autoPlay muted loop className={styles.video}>
        <source src="/video/sun.webm" type="video/webm" />
      </video>
    </div>
  );
}

export default Video;

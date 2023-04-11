import React, { useEffect, useState } from 'react';
import styles from './video.module.css';

function Video() {
  const [video, setVideo] = useState('');

  useEffect(() => {
    setVideo('sun.webm');
  }, []);

  return (
    <div>
      <video preload="/img/backgroundLoading.jpg" autoPlay muted loop className={styles.video} src={`/video/${video}`} />
    </div>
  );
}

export default Video;

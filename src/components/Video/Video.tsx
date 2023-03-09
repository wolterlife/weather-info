import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './video.module.css';
import { RootState } from '../../redux/store';

function Video() {
  const currentWeather = useSelector((state: RootState) => state.toolkitSlice.currentWeather);
  const [video, setVideo] = useState('sun');

  useEffect(() => {
    setVideo(currentWeather.slice(5).replace('png', 'webm'));
  }, [currentWeather]);

  return (
    <div>
      <video preload="/img/backgroundLoading.jpg" autoPlay muted loop className={styles.video} src={`/video/${video}`} />
    </div>
  );
}

export default Video;

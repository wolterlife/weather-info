import React, { useEffect, useState } from 'react';
import styles from './video.module.css';
import useTypedSelector from '../../hooks/useTypedSelector';

function Video() {
  const [video, setVideo] = useState('');
  const { currentWeather, loading } = useTypedSelector((state) => state.weatherReducer);

  useEffect(() => {
    setVideo(`${currentWeather}.webm`);
  }, [currentWeather]);

  return (
    <div>
      {!loading
      && <video preload="/img/backgroundLoading.jpg" autoPlay muted loop className={styles.video} src={`video/${video}`} />}
    </div>
  );
}

export default Video;

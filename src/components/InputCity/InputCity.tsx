import React, { useEffect, useState } from 'react';
import styles from './InputCity.module.css';
import weatherApi from '../../redux/weatherApi';

function InputCity() {
  const [inputCityField, setInputField] = useState('');
  const [currentPos, setCurrentPos] = useState({
    lat: 0,
    lng: 0,
  });
  const [, setCity] = useState('');
  const { data, error } = weatherApi.useGetCityAndWeatherByPosQuery(currentPos);

  useEffect(() => { // Get pos when user connected
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentPos({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      setInputField(data?.value);
    });
  }, []);

  return (
    <div className={styles.inputBackground}>
      <div className={styles.inputContent}>
        <input
          defaultValue={data?.name}
          onChange={(v) => setInputField(v.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') setCity(inputCityField); }}
          placeholder="Write city"
          className={styles.input}
        />
        <input
          onClick={() => setCity(inputCityField)}
          type="image"
          src="/img/search.png"
          className={styles.imgSearch}
          alt="search"
        />
      </div>
      <hr className={(error || data?.length === 0) ? styles.lineError : styles.line} />
    </div>

  );
}

export default InputCity;

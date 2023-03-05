import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './InputCity.module.css';
import weatherApi from '../../redux/weatherApi';
import { changeCity } from '../../redux/mainSlice';

function InputCity() {
  const dispatch = useDispatch();
  const [inputCityField, setInputField] = useState('');
  const [currentPos, setCurrentPos] = useState({
    lat: -9999,
    lng: -9999,
  });
  const [city, setCity] = useState('');
  const { data } = weatherApi.useGetCityByPosQuery(currentPos);
  const newCityCheck = weatherApi.useGetPosByCityQuery(city);

  useEffect(() => { // Get pos when user connected
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentPos({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => { // Set default input
    setInputField(data?.name);
    dispatch(changeCity(data?.name));
  }, [data]);

  return (
    <div className={styles.inputBackground}>
      <div className={styles.inputContent}>
        <input
          defaultValue={data?.name}
          onChange={(v) => setInputField(v.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setCity(inputCityField);
              dispatch(changeCity(inputCityField));
            }
          }}
          placeholder="Write city"
          className={styles.input}
        />
        <input
          onClick={() => {
            setCity(inputCityField);
            dispatch(changeCity(inputCityField));
          }}
          type="image"
          src="/img/search.png"
          className={styles.imgSearch}
          alt="search"
        />
      </div>
      <hr className={(newCityCheck.data?.length === 0) ? styles.lineError : styles.line} />
    </div>

  );
}

export default InputCity;

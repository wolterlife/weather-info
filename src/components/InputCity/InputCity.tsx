import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../theme.css';
import cn from 'classnames';
import styles from './InputCity.module.css';
import cityApi from '../../redux/api/cityApi';
import { changePosition } from '../../redux/mainSlice';
import { RootState } from '../../redux/store';

function InputCity() {
  const dispatch = useDispatch();
  const weather = useSelector((state: RootState) => state.toolkitSlice.currentWeather);
  const [inputCityField, setInputField] = useState('');
  const [currentPos, setCurrentPos] = useState({
    latitude: -9999,
    longitude: -9999,
  });
  const [cityConfirm, setCityConfirm] = useState('');
  const dataCityByPos = cityApi.useGetCityByPosQuery(currentPos, {
    skip: (currentPos.latitude === -9999),
  });
  const newCityCheck = cityApi.useGetPosByCityQuery(cityConfirm, {
    skip: (cityConfirm === ''),
  });

  // Get pos when user connected
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCurrentPos({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
      dispatch(changePosition({
        latitude: coords.latitude,
        longitude: coords.longitude,
      }));
    });
  }, []);

  // Set default input field
  useEffect(() => {
    setInputField(dataCityByPos.data?.name);
  }, [dataCityByPos]);

  // Send action with pos after city input
  useEffect(() => {
    dispatch(changePosition({
      latitude: newCityCheck.data?.[0]?.lat,
      longitude: newCityCheck.data?.[0]?.lon,
    }));
  }, [newCityCheck]);

  return (
    <div className={cn(styles.inputBackground, weather.slice(5, -4))}>
      <div className={styles.inputContent}>
        <input
          defaultValue={dataCityByPos?.data?.name}
          onChange={(v) => setInputField(v.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') { setCityConfirm(inputCityField); } }}
          placeholder="Write city"
          className={styles.input}
        />
        <input
          onClick={() => { setCityConfirm(inputCityField); }}
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

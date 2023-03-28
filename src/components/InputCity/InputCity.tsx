import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../theme.css';
import cn from 'classnames';
import styles from './InputCity.module.css';
import cityApi from '../../redux/api/cityApi';
import { changePosition } from '../../redux/mainSlice';
import { RootState } from '../../redux/store';
import 'flag-icons/css/flag-icons.css';

function InputCity() {
  const dispatch = useDispatch();
  const weather = useSelector((state: RootState) => state.toolkitSlice.currentWeather);
  const [inputCityField, setInputField] = useState('');
  const [countryCode, setFlag] = useState('');
  const [getCityByPos, dataCityByPos] = cityApi.useLazyGetCityByPosQuery();
  const [getPosByCity, newCityCheck] = cityApi.useLazyGetPosByCityQuery();

  // Get pos when user connected (by geo)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      getCityByPos({
        latitude: coords.latitude,
        longitude: coords.longitude,
      }).then((res) => {
        dispatch(changePosition({
          latitude: coords.latitude,
          longitude: coords.longitude,
        }));
        setInputField(res.data.name);
        setFlag(res.data.sys.country);
      });
    }, ((error) => {
      console.log(error);
    }), { maximumAge: 0 });
  }, []);

  function changePosFromInput(city: string) {
    getPosByCity(city).then((res) => {
      setFlag(res.data?.[0]?.country);
      dispatch(changePosition({
        latitude: res.data?.[0]?.lat,
        longitude: res.data?.[0]?.lon,
      }));
    });
  }

  return (
    <div className={cn(styles.inputBackground, weather.slice(5, -4))}>
      <div className={styles.inputContent}>
        <span className={cn(styles.flag, `fi fi-${countryCode?.toLowerCase()}`)}>{countryCode}</span>
        <input
          defaultValue={dataCityByPos?.data?.name}
          onChange={(v) => setInputField(v.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              changePosFromInput(inputCityField);
            }
          }}
          placeholder="Write city"
          className={styles.input}
        />
        <input
          onClick={() => {
            changePosFromInput(inputCityField);
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

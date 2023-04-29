import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import '../../theme.css';
import cn from 'classnames';
import styles from './InputCity.module.css';
import 'flag-icons/css/flag-icons.css';
import useTypedSelector from '../../hooks/useTypedSelector';
import getCountryFlag from '../../helpers/getCountryFlag';
import { fetchWeatherAction } from '../../redux/actions/weatherActions';

function InputCity() {
  const dispatch = useDispatch();
  const {
    error, timezone, currentWeather, address,
  } = useTypedSelector((state) => state.weatherReducer);
  const [inputCityField, setInputField] = useState(address);

  const getCityByInput = () => dispatch(fetchWeatherAction(inputCityField));

  useEffect(() => { // TODO: двойной рендер (не из-за навигации)
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      dispatch(fetchWeatherAction(`${latitude},${longitude}`));
    });
  }, []);

  useEffect(() => {
    if (address.match(/[0-9]/g)) setInputField(timezone);
  }, [address]);

  return (
    <div className={cn(styles.inputBackground, currentWeather)}>
      <div className={styles.inputContent}>
        <span className={cn(styles.flag, getCountryFlag(timezone))}>__</span>
        <input
          value={inputCityField}
          onChange={(v) => setInputField(v.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') getCityByInput();
          }}
          placeholder="Write city"
          className={styles.input}
        />
        <input
          onClick={getCityByInput}
          type="image"
          src="/img/search.png"
          className={styles.imgSearch}
          alt="search"
        />
      </div>
      <hr className={(error) ? styles.lineError : styles.line} />
    </div>
  );
}

export default InputCity;

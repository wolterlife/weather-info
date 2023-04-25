import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../../theme.css';
import cn from 'classnames';
import styles from './InputCity.module.css';
import 'flag-icons/css/flag-icons.css';
import { weatherActionTypes } from '../../types/weather';
import useTypedSelector from '../../hooks/useTypedSelector';
import getCountyFlag from '../../helpers/getCountyFlag';

function InputCity() {
  const dispatch = useDispatch();
  const [inputCityField, setInputField] = useState('');
  const { error, timezone, currentWeather } = useTypedSelector((state) => state.weatherReducer);

  const getCityByInput = () => dispatch(
    { type: weatherActionTypes.FETCH_WEATHER, action: inputCityField },
  );

  return (
    <div className={cn(styles.inputBackground, currentWeather)}>
      <div className={styles.inputContent}>
        <span className={cn(styles.flag, getCountyFlag(timezone))}>__</span>
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

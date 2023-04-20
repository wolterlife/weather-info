import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../../theme.css';
import cn from 'classnames';
import styles from './InputCity.module.css';
import 'flag-icons/css/flag-icons.css';
import { weatherActionTypes } from '../../types/weather';
import useTypedSelector from '../../hooks/useTypedSelector';

function InputCity() {
  const [inputCityField, setInputField] = useState('');
  const error = useTypedSelector((state) => state.weatherReducer.error);
  const dispatch = useDispatch();

  const getCityByInput = () => dispatch(
    { type: weatherActionTypes.FETCH_WEATHER, action: inputCityField },
  );

  return (
    <div className={cn(styles.inputBackground, 'sun')}>
      <div className={styles.inputContent}>
        <span className={cn(styles.flag, 'fi fi-us')}>US</span>
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

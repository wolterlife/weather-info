import React, { useState } from 'react';
import '../../theme.css';
import cn from 'classnames';
import styles from './InputCity.module.css';
import 'flag-icons/css/flag-icons.css';

function InputCity() {
  const [inputCityField, setInputField] = useState('');

  return (
    <div className={cn(styles.inputBackground, 'sun')}>
      {/* <div className={cn(styles.inputBackground, weather.slice(5, -4))}> */}
      <div className={styles.inputContent}>
        <span className={cn(styles.flag, 'fi fi-us')}>US</span>
        <input
          value={inputCityField}
          onChange={(v) => setInputField(v.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
            //
            }
          }}
          placeholder="Write city"
          className={styles.input}
        />
        <input
          onClick={() => {
          //
          }}
          type="image"
          src="/img/search.png"
          className={styles.imgSearch}
          alt="search"
        />
      </div>
      {/* eslint-disable-next-line max-len */}
      {/* <hr className={(newCityCheck.data?.length === 0) ? styles.lineError : styles.line} /> */}
      <hr className={styles.line} />
    </div>
  );
}

export default InputCity;

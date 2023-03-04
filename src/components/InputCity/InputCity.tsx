import React, { useState } from 'react';
import styles from './InputCity.module.css';
import weatherApi from '../../redux/weatherApi';

function InputCity() {
  const [inputCityField, setInputField] = useState('');
  const [city, setCity] = useState('');
  const { data, error } = weatherApi.useGetCityQuery(city);
  return (
    <div className={styles.inputBackground}>
      <div className={styles.inputContent}>
        <input
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

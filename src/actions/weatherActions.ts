import { createAction } from '@reduxjs/toolkit';
import { ResponseWeather } from '../types/weather';

const SET_WEATHER_MODE = 'SET_WEATHER_MODE';
const FETCH_WEATHER = 'FETCH_WEATHER';
const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';

const setModeAction = createAction<string>(SET_WEATHER_MODE);
const fetchWeatherAction = createAction<string>(FETCH_WEATHER);
const fetchWeatherGoodAction = createAction<ResponseWeather>(FETCH_WEATHER_SUCCESS);
const fetchWeatherBadAction = createAction<unknown>(FETCH_WEATHER_ERROR);

export {
  SET_WEATHER_MODE,
  FETCH_WEATHER,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_SUCCESS,
  setModeAction,
  fetchWeatherBadAction,
  fetchWeatherGoodAction,
  fetchWeatherAction,
};

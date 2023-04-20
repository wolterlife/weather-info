import { call, put, takeEvery } from 'redux-saga/effects';
import { AnyAction } from '@reduxjs/toolkit';
import { ResponseWeather, weatherActionTypes } from '../../types/weather';

const fetchWeatherFromApi = (city: string) => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=hours%2Cdays%2Ccurrent&key=RT2ZU89V94SD7RSVZ9E85NCG3&contentType=json`)
  .then((res) => res.json());

// TODO: Review check
// function* fetchWeatherWorker(action: AnyAction) {
//   try {
//     yield console.log(action);
//     const data: ResponseWeather = yield call(fetchWeatherFromApi, action.payload);
//     yield put({ type: weatherActionTypes.FETCH_WEATHER_SUCCESS, payload: data });
//   } catch (e) {
//     yield put({ type: weatherActionTypes.FETCH_WEATHER_ERROR, payload: e });
//   }
// }

function* fetchWeatherWorker({ action }: AnyAction) {
  try {
    yield console.log(action);
    const data: ResponseWeather = yield call(fetchWeatherFromApi, action);
    yield put({ type: weatherActionTypes.FETCH_WEATHER_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: weatherActionTypes.FETCH_WEATHER_ERROR, payload: e });
  }
}

function* weatherWatcher() {
  yield takeEvery(weatherActionTypes.FETCH_WEATHER, fetchWeatherWorker);
}

export default weatherWatcher;

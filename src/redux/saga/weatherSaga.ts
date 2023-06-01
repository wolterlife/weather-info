import { call, put, takeEvery } from 'redux-saga/effects';
import { AnyAction } from '@reduxjs/toolkit';
import { ResponseWeather } from '../../types/weather';
import { FETCH_WEATHER, fetchWeatherBadAction, fetchWeatherGoodAction } from '../../actions/weatherActions';
import fetchWeatherFromApi from '../../api/weatherApi';

function* fetchWeatherWorker(action: AnyAction) {
  try {
    const data: ResponseWeather = yield call(fetchWeatherFromApi, action.payload);
    yield put(fetchWeatherGoodAction(data));
  } catch (e) {
    yield put(fetchWeatherBadAction(e));
  }
}

function* weatherWatcher() {
  yield takeEvery(FETCH_WEATHER, fetchWeatherWorker);
}

export default weatherWatcher;

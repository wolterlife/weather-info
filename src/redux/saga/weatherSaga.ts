import { call, put, takeEvery } from 'redux-saga/effects';
import { weatherActionTypes } from '../../types/weather';

const fetchWeatherFromApi = () => fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Moscow?unitGroup=metric&include=hours%2Cdays%2Ccurrent&key=RT2ZU89V94SD7RSVZ9E85NCG3&contentType=json')
  .then((res) => res.json());

function* fetchWeatherWorker() {
  try {
    const data: Response = yield call(fetchWeatherFromApi);
    yield put({ type: weatherActionTypes.FETCH_WEATHER_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: weatherActionTypes.FETCH_WEATHER_ERROR, payload: e });
  }
}

function* weatherWatcher() {
  yield takeEvery(weatherActionTypes.FETCH_WEATHER, fetchWeatherWorker);
}

export default weatherWatcher;

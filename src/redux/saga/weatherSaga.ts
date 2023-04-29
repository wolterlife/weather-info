import { call, put, takeEvery } from 'redux-saga/effects';
import { ResponseWeather } from '../../types/weather';
import { FETCH_WEATHER, fetchWeatherBadAction, fetchWeatherGoodAction } from '../actions/weatherActions';

const fetchWeatherFromApi = (city: string) => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&elements=datetimeEpoch%2Ctempmin%2Ctemp%2Cicon&include=days%2Chours&iconSet=icons2&key=RT2ZU89V94SD7RSVZ9E85NCG3&contentType=json`)
  .then((res) => res.json());

function* fetchWeatherWorker(action: any) {
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
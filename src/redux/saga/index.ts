import { all } from 'redux-saga/effects';
import weatherSaga from './weatherSaga';
import calendarSaga from './calendarSaga';

export default function* rootWatcher() {
  yield all([weatherSaga(), calendarSaga()]);
}

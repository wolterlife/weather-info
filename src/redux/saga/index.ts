import { all } from 'redux-saga/effects';
import weatherSaga from './weatherSaga';

export default function* rootWatcher() {
  yield all([weatherSaga()]);
}

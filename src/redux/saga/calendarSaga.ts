import { call, takeEvery } from 'redux-saga/effects';
import { FETCH_CALENDAR } from '../actions/calendarActions';
import getEvents from '../../api/googleApi';

function* calendarWorker() {
  yield call(getEvents);
}

function* calendarWatcher() {
  yield takeEvery(FETCH_CALENDAR, calendarWorker);
}

export default calendarWatcher;

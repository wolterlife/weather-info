import { takeEvery } from 'redux-saga/effects';
import { FETCH_CALENDAR } from '../actions/calendarActions';

function* calendarWorker() {

}

function* calendarWatcher() {
  yield takeEvery(FETCH_CALENDAR, calendarWorker);
}

export default calendarWatcher;

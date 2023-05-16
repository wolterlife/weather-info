import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_CALENDAR, fetchCalendarBadAction, fetchCalendarGoodAction } from '../actions/calendarActions';
import { fetchEvents } from '../../api/googleApi';

function* calendarWorker() {
  try {
    const data: Response = yield call(fetchEvents);
    yield put(fetchCalendarGoodAction(data));
  } catch (err) {
    yield put(fetchCalendarBadAction(err));
  }
}

function* calendarWatcher() {
  yield takeEvery(FETCH_CALENDAR, calendarWorker);
}

export default calendarWatcher;

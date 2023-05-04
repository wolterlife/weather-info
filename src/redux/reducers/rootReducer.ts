import { combineReducers } from '@reduxjs/toolkit';
import weatherReducer from './weatherReducer';
import calendarReducer from './calendarReducer';

const rootReducer = combineReducers({
  weatherReducer,
  calendarReducer,
});

export default rootReducer;

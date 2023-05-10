import { combineReducers } from '@reduxjs/toolkit';
import { calendarReducer } from './calendarReducer';
import { weatherReducer } from './weatherReducer';

const rootReducer = combineReducers({
  weatherReducer,
  calendarReducer,
});

export default rootReducer;

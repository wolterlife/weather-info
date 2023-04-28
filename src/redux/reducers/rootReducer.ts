import { combineReducers } from '@reduxjs/toolkit';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  weatherReducer,
});

export default rootReducer;

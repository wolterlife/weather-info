import { PayloadAction } from '@reduxjs/toolkit';
import { WeatherState } from '../../types/weather';

const initialState: WeatherState = {
  mode: 'daily',
};

const weatherReducer = (state = initialState, action: PayloadAction<string>): WeatherState => {
  switch (action.type) {
    case 'SET_WEATHER_MODE':
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export default weatherReducer;

import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState: {
    currentWeather: '/img/sun.png',
    position: {
      latitude: -9999,
      longitude: -9999,
    },
    cacheBlocker: false,
  },
  reducers: {
    changePosition(state, action) {
      state.position.latitude = action.payload.latitude;
      state.position.longitude = action.payload.longitude;
    },
    changeWeather(state, action) {
      state.currentWeather = action.payload;
    },
    setCacheBlocker(state, action) {
      state.cacheBlocker = action.payload;
    },
  },
});

export default mainSlice.reducer;
export const { changePosition, changeWeather, setCacheBlocker } = mainSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'commonSlice',
  initialState: {
    isDateMode: true,
    city: '',
    location: {
      lat: -9999,
      lon: -9999,
    },
  },
  reducers: {
    changeModeOfWeather(state, action) {
      state.isDateMode = action.payload;
    },
    changeLocation(state, action) {
      state.location.lat = action.payload.lat;
      state.location.lon = action.payload.lon;
    },
  },
});

export default mainSlice.reducer;
export const { changeModeOfWeather, changeLocation } = mainSlice.actions;

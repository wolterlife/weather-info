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
    changeCity(state, action) {
      state.city = action.payload;
    },
  },
});

export default mainSlice.reducer;
export const { changeModeOfWeather, changeCity } = mainSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'commonSlice',
  initialState: {
    isDateMode: true,
    position: {
      latitude: -9999,
      longitude: -9999,
    },
  },
  reducers: {
    changeModeOfWeather(state, action) {
      state.isDateMode = action.payload;
    },
    changePosition(state, action) {
      state.position.latitude = action.payload.latitude;
      state.position.longitude = action.payload.longitude;
    },
  },
});

export default mainSlice.reducer;
export const { changeModeOfWeather, changePosition } = mainSlice.actions;

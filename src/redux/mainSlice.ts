import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'commonSlice',
  initialState: {
    isDateMode: true,
  },
  reducers: {
    changeModeOfWeather(state, action) {
      state.isDateMode = action.payload;
    },
  },
});

export default mainSlice.reducer;
export const { changeModeOfWeather } = mainSlice.actions;

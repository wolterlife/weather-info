import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainSlice from './mainSlice';
import weatherApi from './weatherApi';

const rootReducer = combineReducers({
  toolkitSlice: mainSlice,
  [weatherApi.reducerPath]: weatherApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>

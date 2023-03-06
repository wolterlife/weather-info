import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainSlice from './mainSlice';
import weatherApi from './api/weatherApi';
import timeApi from './api/timeApi';

const rootReducer = combineReducers({
  toolkitSlice: mainSlice,
  [weatherApi.reducerPath]: weatherApi.reducer,
  [timeApi.reducerPath]: timeApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    weatherApi.middleware,
    timeApi.middleware,
  ),
});

export type RootState = ReturnType<typeof store.getState>

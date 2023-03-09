import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainSlice from './mainSlice';
import cityApi from './api/cityApi';
import timeApi from './api/timeApi';
import weatherApi from './api/weatherApi';

const rootReducer = combineReducers({
  toolkitSlice: mainSlice,
  [cityApi.reducerPath]: cityApi.reducer,
  [timeApi.reducerPath]: timeApi.reducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    cityApi.middleware,
    timeApi.middleware,
    weatherApi.middleware,
  ),
});

export type RootState = ReturnType<typeof store.getState>

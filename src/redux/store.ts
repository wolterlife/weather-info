import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weatherReducer from './reducers/weatherReducer';

const rootReducer = combineReducers({
    weather: weatherReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof rootReducer>

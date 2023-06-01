import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import expireIn from 'redux-persist-transform-expire-in';
import rootWatcher from './saga';
import { initStateWeather, weatherReducer } from './reducers/weatherReducer';
import { calendarReducer } from './reducers/calendarReducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const time = 60 * 60 * 1000; // expire in 1h (first value = 60)
const expirationKey = 'expirationKey';

const persistConfig = {
  key: 'root',
  storage,
  transforms: [expireIn(time, expirationKey, initStateWeather)],
  blacklist: ['calendarReducer'],
};

const rootReducer = combineReducers({
  weatherReducer,
  calendarReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
    .concat(middleware),
});

sagaMiddleware.run(rootWatcher);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>

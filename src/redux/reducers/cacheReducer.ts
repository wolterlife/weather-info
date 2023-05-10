import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import expireIn from 'redux-persist-transform-expire-in';
import rootReducer from './rootReducer';
import { initStateWeather } from './weatherReducer';

const time = 60 * 60 * 1000; // expire in 1h (first value = 60)
const expirationKey = 'expirationKey';

const persistConfig = {
  key: 'root',
  storage,
  transforms: [expireIn(time, expirationKey, initStateWeather)],
  blacklist: ['calendarReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

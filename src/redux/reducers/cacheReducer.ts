import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import expireIn from 'redux-persist-transform-expire-in';
import rootReducer from './rootReducer';
import { initialState } from './weatherReducer';

const time = 60 * 60 * 1000; // expire in 1h
const expirationKey = 'expirationKey';

const persistConfig = {
  key: 'root',
  storage,
  transforms: [expireIn(time, expirationKey, initialState)],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;

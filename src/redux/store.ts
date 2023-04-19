import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import weatherReducer from './reducers/weatherReducer';
import rootWatcher from './saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const rootReducer = combineReducers({
    weather: weatherReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
    .concat(middleware),
});

sagaMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof rootReducer>

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootWatcher from './saga';
import rootReducer from './reducers/rootReducer';
import persistedReducer from './reducers/cacheReducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
    .concat(middleware),
});

sagaMiddleware.run(rootWatcher);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>

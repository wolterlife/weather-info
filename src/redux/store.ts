import {combineReducers, configureStore} from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";

const rootReducer = combineReducers({
    toolkitSlice: mainSlice
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>


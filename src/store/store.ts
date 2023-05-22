import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { currentWeatherSlice } from "./reducers/currentWeatherSlice";
import { favoriteCitiesSlice } from "./reducers/favoriteCitiesSlice";

export const rootReducer = combineReducers({
    currentWeatherSlice,
    favoriteCitiesSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;

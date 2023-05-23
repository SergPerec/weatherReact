import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import  currentWeatherSlice  from "./reducers/currentWeatherSlice";
import  favoriteCitiesSlice  from "./reducers/favoriteCitiesSlice";
import  forecastWeatherSlice  from "./reducers/forecastWeatherSlice";
import  statisticsSlice  from "./reducers/statisticsSlice";
import { useDispatch } from 'react-redux';
import { storage, storageSetItem } from "../utils/storage";


export const rootReducer = combineReducers({
    currentWeatherSlice,
    favoriteCitiesSlice,
    forecastWeatherSlice,
    statisticsSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false
    })
});

store.subscribe(() => {
    storageSetItem(storage.weatherStats, store.getState().statisticsSlice);
    storageSetItem(storage.weatherFavoriteList, store.getState().favoriteCitiesSlice);
    storageSetItem(storage.weatherCurrentCity, store.getState().currentWeatherSlice.currentCity);
});


export type AppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;

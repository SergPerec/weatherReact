import { IStatistic } from "../../types/otherTypes";
import { countDateOfTopOneCity, findTopOneCity } from "../../utils/helper";
import { storageGetItem, storage } from "../../utils/storage";
import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store";

interface initialStateTypes {
    requestCounter: number,
    dataForTopOneCity: IStatistic[],
    topOneCity: IStatistic | undefined,
};

const initialState = storageGetItem(storage.weatherStats) ?? {
    requestCounter: 0,
    dataForTopOneCity: [],
    topOneCity: {},
};

export const statisticsSlice = createSlice({
    name: 'statisticsSlice',
    initialState: initialState as initialStateTypes,
    reducers: {
        addDataForRequestCounter: (state) => {
            state.requestCounter = state.requestCounter + 1
        },
        addForTopOneCity: (state, action) => {
            state.dataForTopOneCity = countDateOfTopOneCity(state.dataForTopOneCity, action.payload);
            state.topOneCity = findTopOneCity(state.dataForTopOneCity);
        }
    }
});

export const selectStatisticsSlice = (state: IRootState) => state.statisticsSlice;
export const { addDataForRequestCounter, addForTopOneCity } = statisticsSlice.actions;
export default statisticsSlice.reducer;
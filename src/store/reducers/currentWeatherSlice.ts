import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICurrentWeatherNormalize } from "../../types/weatherTypes";
import { createUrlWeather, urlWeatherTypes } from "../../utils/apiHelper";
import { transformWeather } from "../../utils/helper";
import { storage, storageGetItem } from "../../utils/storage";
import { AppDispatch, IRootState } from "../store";

interface initialStateTypes {
    currentWeather: ICurrentWeatherNormalize | null;
    currentCity: string;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
}

const initialState = {
    currentWeather: null,
    currentCity: (storageGetItem(storage.weatherCurrentCity) as string) ?? 'Саратов',
    isLoading: false,
    isSuccess: false,
    isError: false,
}

export const getCurrentWeather = createAsyncThunk<
    ICurrentWeatherNormalize,
    string,
    {
        disputch: AppDispatch;
        state: IRootState;
    }
>('getCurrentWeather', async (cityName, thinkAPI) => {
    const urlWeather = createUrlWeather(cityName, urlWeatherTypes.currentWeather);
    try {
        const response = await fetch(urlWeather);
        if (response.ok) {
            const data = await response.json();
            return transformWeather(data);
        } else {
            const error = await response.json();
            return thinkAPI.rejectWithValue(error?.message);
        }
    } catch (error) {
        console.log(error);
        return thinkAPI.rejectWithValue(error);
    }
})

export const currentWeatherSlice = createSlice({
    name: 'currentWeatherSlice',
    initialState: initialState as initialStateTypes,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCurrentWeather.pending,
            (state) => {
                state.isLoading = true;
                state.isSuccess = false;
                state.isError = false;
            });
        builder.addCase(getCurrentWeather.fulfilled,
            (state, { payload }: PayloadAction<ICurrentWeatherNormalize>) => {
                state.currentWeather = payload;
                state.currentCity = payload.cityName;
                state.isLoading = true;
                state.isSuccess = false;
            });
        builder.addCase(getCurrentWeather.rejected,
            (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
});

export const selectorCurrentWeatherSlice = (state: IRootState) => state.currentWeatherSlice;
export default currentWeatherSlice.reducer;
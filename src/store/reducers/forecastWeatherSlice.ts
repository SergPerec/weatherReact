import { IForecastWeatherNormalized } from "../../types/forecastTypes";
import { createUrlWeather, urlWeatherTypes } from "../../utils/apiHelper";
import { transformForecast } from "../../utils/helper";
import { AppDispatch, IRootState } from "../store";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface initialStateTypes {
    forcastWeather: IForecastWeatherNormalized[];
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
};

const initialState = {
    forcastWeather: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
};

export const getForecastWeather = createAsyncThunk<
    IForecastWeatherNormalized[],
    string,
    {
        dispatch: AppDispatch;
        state: IRootState;
    }
>('getForecastWeather', async (cityName, thunkAPI) => {
    const urlForecast = createUrlWeather(cityName, urlWeatherTypes.forecastWeather);
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            return transformForecast(data);
        } else {
            const error = await response.json();
            return thunkAPI.rejectWithValue(error?.message);
        }
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
});

export const forecastWeatherSlice = createSlice({
    name: 'forecastWeatherSlice',
    initialState: initialState as initialStateTypes,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getForecastWeather.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
        });
        builder.addCase(getForecastWeather.fulfilled,
            (state, { payload }: PayloadAction<IForecastWeatherNormalized[]>) => {
                state.forcastWeather = payload;
                state.isLoading = false;
                state.isSuccess = true;
            });
        builder.addCase(getForecastWeather.rejected,
            (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
})

export const selectorForecastWeatherSlice = (state: IRootState) => state.forecastWeatherSlice;
export default forecastWeatherSlice.reducer;
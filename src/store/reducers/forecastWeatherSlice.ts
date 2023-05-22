import { IForcastWeatherNormalized } from "../../types/forecastTypes";
import { createUrlWeather, urlWeatherTypes } from "../../utils/apiHelper";
import { transformForecast } from "../../utils/helper";
import { AppDispatch, IRootState } from "../store";



interface initialStateTypes {
    forcastWeather: IForcastWeatherNormalized[],
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
    IForcastWeatherNormalized[],
    string, 
    {
        dispatch: AppDispatch;
        state: IRootState;
    }   
>('getFprecastWeather', async (cityName, thunkAPI) => {
    const urlForecast = createUrlWeather(cityName, urlWeatherTypes.forecastWeather);
    try {
        const response = await fetch(urlForecast);
        if(response.ok) {
            const data = response.json();
            return transformForecast(data);
        } else {
            const error = response.json();
            return thunkAPI.rejectWithValue(error?.message);
        }
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
});


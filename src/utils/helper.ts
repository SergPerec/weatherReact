import { IForcastWeather, IForcastWeatherNormalized } from "../types/forecastTypes";
import { IStatistic } from "../types/statistic";
import { ICurrentWeather, ICurrentWeatherNormalize } from "../types/weatherTypes";

export const transformWeather = (data: ICurrentWeather): ICurrentWeatherNormalize => {
    return {
        cityName: data.name,
        feelsLike: convertKelvinCelsius(data.main.feels_like),
        temp: convertKelvinCelsius(data.main.temp),
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        sunrise: convertTimestempToTime(data.sys.sunrise, data.timezone),
        sunset: convertTimestempToTime(data.sys.sunset, data.timezone),
        timezone: data.timezone,
    }
}

export function convertKelvinCelsius(kelvin: number): number {
    return +(kelvin - 273.15).toFixed(1);
}

export function convertTimestempToTime(unixTimestemp: number, timezone: number): string {
    const date = new Date((unixTimestemp + timezone) * 1000);
    const hours = '0' + date.getUTCHours();
    const minets = '0' + date.getMinutes();
    return hours.slice(-2) + ':' + minets.slice(-2);
}

export function convertTimestempToDayMonth(unixTimestemp: number, timezone: number): string {
    const date = new Date((unixTimestemp + timezone) * 1000);
    const day = date.getUTCDay();
    const numOfMonth = date.getUTCMonth();
    const monthObj: { [char: number]: string } = {
        0: 'января',
        1: 'февраля',
        2: 'марта',
        3: 'апреля',
        4: 'мая',
        5: 'июня',
        6: 'июля',
        7: 'августа',
        8: 'сентября',
        9: 'октября',
        10: 'ноября',
        11: 'декабря',
    }
    const month = monthObj[numOfMonth];
    return `${day} ${month}`;
}

export function translateWeather(weatherFromDate: string): string {
    const weather: { [char: string]: string } = {
        Clouds: 'Облачно',
        Clear: 'Ясно',
        Snow: 'Снег',
        Thunderstorm: 'Гроза',
        Drizzle: 'Дождь',
        Rain: 'Дождь',
        Mist: 'Туман',
        Smoke: 'Смог',
        Haze: 'Туман',
        Dust: 'Пыль',
        Fog: 'Туман',
        Sand: 'Песок',
        Ash: 'Пепел',
        Squall: 'Ураган',
        Tornado: 'Торнадо'
    }
    return weather[weatherFromDate];
}

export const transformForecast = (dataForecast: IForcastWeather): IForcastWeatherNormalized[] => {
    return dataForecast.list;
};

export const countDateOfTopOneCity = (list: IStatistic[], city: string) => {
    const newList = JSON.parse(JSON.stringify(list));
    const index = newList.findIndex((item: IStatistic) => item.name === city);
    if (index > -1) {
        newList[index].count += 1;
    } else {
        newList.push({ name: city, count: 1 });
    };
    return newList;
};

export const findTopOneCity = (list: IStatistic[]) => {
    if (!list.length) return;
    const cityName = list.reduce((acc, item) => {
        if(!acc || acc.count < item.count) {
            acc = item
        }
        return acc;
    });
    return cityName;
}
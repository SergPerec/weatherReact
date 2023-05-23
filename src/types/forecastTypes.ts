export interface City {
	id: number;
	name: string;
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset: number;
	coord: Coord;
}

export interface Coord {
	lat: number;
	lon: number;
}

export interface IForecastWeather {
	cod: string;
	message: number;
	cnt: number;
	city: string;
	list: IForecastWeatherNormalized[];
}

export interface IForecastWeatherNormalized {
	dt: number;
	visipility: number;
	pop: number;
	dt_txt: string;
	main: Main;
	weather: Weather[];
	clouds: Clouds;
	wind: Wind;
	rain?: Rain;
	sys: Sys;
}

export interface Main {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	sea_level: number;
	grnd_level: number;
	humidity: number;
	temp_kf: number;
}

export interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface Clouds {
	all: number;
}

export interface Wind {
	speed: number;
	deg: number;
	gust: number;
}

export interface Rain {
	'3h': string;
}

export interface Sys {
	pop: string;
}

export interface City {
	id: number;
	name: string;
	coord: Coord;
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset: number;
}

export interface Coord {
	lat: number;
	lot: number;
}
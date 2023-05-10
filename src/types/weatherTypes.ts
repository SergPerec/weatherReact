export interface ICurrentWeatherNormalize {
	cityName: string;
	feelsLike: number;
	description: string;
	temp: number;
	icon: string;
	sunrise: string;
	sunset: string;
	timezone: number;
}

export interface ICurrentWeather {
	base: string;
	weather: Weather[];
	coord: Coord;
	main: Main;
	visibility: number;
	wind: Wind;
	clouds: Clouds;
	dt: number;
	sys: Sys;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

interface Coord {
	lon: number;
	lat: number;
}

interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

interface Main {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
}

interface Wind {
	speed: number;
	deg: number;
}

interface Clouds {
	all: number;
}

interface Sys {
	type: number;
	id: number;
	country: string;
	sunrise: number;
	sunset: number;
}
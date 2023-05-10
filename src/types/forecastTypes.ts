export interface City {
	id: number;
	name: string;
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset:number;
	coord: Coord;
}

export interface Coord {
	lat: number;
	lon: number;
}


export const storage = {
    weatherStats: 'weather-stats',
    weatherFavoriteList: 'weatherFavoriteList',
    weatherCurrentCity: 'weatherCurrentCity', 
};

export const storageGetItem = (storageItem: string) => {
    try {
        const response = localStorage.getItem(storageItem);
        if (response) return JSON.parse(response)
    } catch (error) {
        console.log(error)
    }
};

export const storageSetItem = (storageItem: string, value: unknown) => {
    try {
        localStorage.setItem(storageItem, JSON.stringify(value))
    } catch (error) {
        console.log(error)
    }
}
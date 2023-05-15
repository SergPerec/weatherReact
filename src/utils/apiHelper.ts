const weatherUrlTypes = {
    currentWeather: 'currentWeather',
    forcastWeather: 'forcastWeather',
};

export const createUrlWeather = (city: string, type: string): string => {
    const apiKey = '7510f7f4f850f3de4ccfa3409edd947b';
    const url = 'https://api.openweathermap.org/data/2.5/';
    if (type === weatherUrlTypes.currentWeather) {
        return `${url}weather?q=${city}&appid=${apiKey}&lang=ru`
    } else {
        return `${url}forecast?q=${city}&appid=${apiKey}&lang=ru`
    }
};

export const urlImageSizes = {
    two: '@2x',
    four: '@4x'
};

export const createUrlImage = (icon: string, size: string): string => {
    const url = 'https://openweathermap.org/img/wn/';
    return `${url}${icon}${size}.png`
};






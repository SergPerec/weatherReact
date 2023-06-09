export const urlWeatherTypes = {
    currentWeather: 'currentWeather',
    forecastWeather: 'forecastWeather'
  };
  
  export const createUrlWeather = (city: string, type: string): string => {
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = 'https://api.openweathermap.org/data/2.5/';
    if (type === urlWeatherTypes.currentWeather) {
      return `${url}weather?q=${city}&appid=${apiKey}&lang=ru`;
    } else {
      return `${url}forecast?q=${city}&appid=${apiKey}&lang=ru`;
    }
  };
  
  export const urlImageSizes = {
    two: '@2x',
    four: '@4x'
  };
  
  export const createUrlImage = (icon: string, size: string): string => {
    const url = 'https://openweathermap.org/img/wn/';
    return `${url}${icon}${size}.png`;
  };






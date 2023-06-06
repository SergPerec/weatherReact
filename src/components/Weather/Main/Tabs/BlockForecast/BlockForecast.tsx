import { useSelector } from 'react-redux';
import './Style.css';
import { selectorForecastWeatherSlice } from '../../../../../store/reducers/forecastWeatherSlice';
import { selectorCurrentWeatherSlice } from '../../../../../store/reducers/currentWeatherSlice';
import ItemForecast from './ItemForecast/ItemForecast';

const BlockForecast = () => {
  const { forcastWeather, isLoading, isError } = useSelector(selectorForecastWeatherSlice);
  const { currentWeather } = useSelector(selectorCurrentWeatherSlice);

  if (isLoading) return <div className="message-tab">Загрузка...</div>;
  if (isError) return <div className="message-tab">Произошла ошибка загрузки.</div>;
  if (!currentWeather || !forcastWeather) return null;

  const {timezone, cityName} = currentWeather;

  return (
    <div className="tab-forecast">
        <div className="forecast-city-name">{cityName}</div>
        <div className="forecast-list">
            {forcastWeather.length ?
            forcastWeather.map((item,index) => (
                <ItemForecast
                key={index}
                date={item.dt}
                timezone={timezone}
                pic={item.weather[0].icon}
                tempFeels={item.main.feels_like}
                tempReal={item.main.temp}
                text={item.weather[0].main}
                />
            )): null}
        </div>
    </div>
  )

};

export default BlockForecast;

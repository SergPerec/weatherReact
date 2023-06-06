import { createUrlImage, urlImageSizes } from '../../../../../../utils/apiHelper';
import {
  convertKelvinCelsius,
  convertTimestempToDayMonth,
  convertTimestempToTime,
  translateWeather
} from '../../../../../../utils/helper';
import './Style.css';

interface ItemForecastTypes {
  date: number;
  timezone: number;
  tempReal: number;
  tempFeels: number;
  text: string;
  pic: string;
}

const ItemForecast = ({
  date,
  timezone,
  tempReal,
  tempFeels,
  text,
  pic: icon
}: ItemForecastTypes) => {
  return (
    <div className="forecast-item">
      <div className="date-time">
        <div className="date">{convertTimestempToDayMonth(date, timezone)}</div>
        <div className="time">{convertTimestempToTime(date, timezone)}</div>
      </div>
      <div className="weather">
        <div className="temper">
          <div className="real-temp">
            Температура: {convertKelvinCelsius(tempReal)}
            <span>&#8451;</span>
          </div>
          <div className="feels-temp">
            Ощущается как: {convertKelvinCelsius(tempFeels)}
            <span>&#8451;</span>
          </div>
        </div>
        <div className="sky">
            <div className="sky-text">
                {translateWeather(text)}
            </div>
            <img className='sky-pic' src={createUrlImage(icon, urlImageSizes.two)} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default ItemForecast;

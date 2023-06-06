import { useSelector } from "react-redux";
import "./Style.css";
import { selectorCurrentWeatherSlice } from "../../../../../store/reducers/currentWeatherSlice";

const BlockDetails = () => {
    const { currentWeather, isLoading, isError } = useSelector(selectorCurrentWeatherSlice);
  
    if (isLoading) {
      return <div className="message-tab">Идет загрузка..</div>;
    }
    if (isError) {
      return <div className="message-tab">Ошибка при загрузке</div>;
    }
  
    if (!currentWeather) return null;
    const { cityName, feelsLike, temp, description, sunrise, sunset } = currentWeather;
  
    return (
      <div className="tab-details">
        <div className="details-city-name">{cityName}</div>
        <div className="details-list">
          <ul>
            <li className="details-item">
              Температура: <span className="current-temp">{temp}</span>
              <span>&#8451;</span>
            </li>
            <li className="details-item">
              Ощущается как: <span className="current-feels">{feelsLike}</span>
              <span>&#8451;</span>
            </li>
            <li className="details-item">
              Погода: <span className="current-cloudy">{description}</span>
            </li>
            <li className="details-item">
              Восход: <span className="current-sunrise">{sunrise}</span>
            </li>
            <li className="details-item">
              Закат: <span className="current-sunset">{sunset}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default BlockDetails;
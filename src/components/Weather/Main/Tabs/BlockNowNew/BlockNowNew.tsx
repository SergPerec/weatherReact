import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './Style.css';
import { selectorCurrentWeatherSlice } from '../../../../../store/reducers/currentWeatherSlice';
import {
  addFavoriteCities,
  deleteFavoriteCities,
  selectorFavoriteCities
} from '../../../../../store/reducers/favoriteCitiesSlice';
import { createUrlImage, urlImageSizes } from '../../../../../utils/apiHelper';
import ImgHeart from '../../../../Images/ImgHeart';

const BlockNowNew = () => {
  const dispatch = useDispatch();

  const { currentWeather, isLoading, isError } = useSelector(selectorCurrentWeatherSlice);
  const { favoriteCities } = useSelector(selectorFavoriteCities);

  if (isLoading) {
    return <div className="message-tab">Загрузка...</div>;
  }

  if (isError) {
    return <div className="message-tab">Произошла ошибка при загрузке.</div>;
  }

  if (!currentWeather) return null;

  const { cityName, icon, temp } = currentWeather;

  const getFavoriteCities = (city: string): void => {
    if (favoriteCities.includes(city)) {
      dispatch(deleteFavoriteCities(city));
    } else {
      dispatch(addFavoriteCities(city));
    }
  };

  return (
    <div className="tab-now">
      <div className="now-temperature">
        <span className="current-temp">{temp}</span>
        <span>&#8451;</span>
      </div>
      <div className="now-sky">
        {icon && <img className="picture-weather" src={createUrlImage(icon, urlImageSizes.four)} />}
      </div>
      <div className="now-city">
        <div className="now-city-name">{cityName}</div>
      </div>
      <div
        onClick={() => getFavoriteCities(cityName)}
        className={`favorite-button ${favoriteCities.includes(cityName) ? 'checked' : ''}`}>
        <ImgHeart />
      </div>
    </div>
  );
};

export default BlockNowNew;

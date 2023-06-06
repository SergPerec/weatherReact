import './FavoriteStyle.css';
import { useAppDispatch } from '../../../store/store';
import { useSelector } from 'react-redux';
import {
  getCurrentWeather,
  selectorCurrentWeatherSlice
} from '../../../store/reducers/currentWeatherSlice';
import {
  clearAllFavoriteCities,
  deleteFavoriteCities,
  selectorFavoriteCities
} from '../../../store/reducers/favoriteCitiesSlice';

const Favorite = () => {
  const dispatch = useAppDispatch();

  const { currentCity } = useSelector(selectorCurrentWeatherSlice);
  const { favoriteCities } = useSelector(selectorFavoriteCities);

  const showFromFavorite = (city: string) => {
    if (city !== currentCity) {
      dispatch(getCurrentWeather(city));
      dispatch(getCurrentWeather(city));
    }
  };

  const deleteCity = (city: string) => {
    dispatch(deleteFavoriteCities(city));
  };

  const handleClearFavoriteCities = () => {
    dispatch(clearAllFavoriteCities);
  };

  return (
    <div className="section-favorite">
      <div className="favorite-title-block">Избранное</div>
      <div className="favorite-list-block">
        <div className="list-cities">
          {favoriteCities.map((item: string) => {
            return (
              <div key={item} className="list-item">
                <div className="list-item-name" onClick={() => showFromFavorite(item)}>
                  {item}
                </div>
                <div className="list-item-btn" onClick={() => deleteCity(item)}>
                  <span>&#215;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="button-clear" onClick={handleClearFavoriteCities}>Очистить лист.</div>
    </div>
  );
};

export default Favorite;

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store/store';
import { selectorCurrentWeatherSlice } from '../../../store/reducers/currentWeatherSlice';
import { ChangeEvent, useState } from 'react';
import { getCurrentWeather } from '../../../store/reducers/currentWeatherSlice';
import { getForecastWeather } from '../../../store/reducers/forecastWeatherSlice';
import './SearchStyle.css';
import ImgSearch from '../../Images/ImgSearch';

const defaultInputValue = '';

const Search = () => {
  const dispatch = useAppDispatch();
  const { currentCity } = useSelector(selectorCurrentWeatherSlice);
  const [inputValue, setInputValue] = useState(defaultInputValue);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const city = inputValue.trim();
    if (city.length < 3) {
      return;
    }
    if (city.toLowerCase() === currentCity.toLowerCase()) {
      return;
    }
    dispatch(getCurrentWeather(inputValue));
    dispatch(getForecastWeather(inputValue));
    setInputValue(defaultInputValue);
  };

  return (
    <div className="section_search">
      <form className="form_search" onSubmit={handleSubmit} action="#">
        <input
          className="input_search"
          type="text"
          onChange={handleInput}
          placeholder="Введите название города."
          value={inputValue}
        />
        <button className="button_search" type="submit">
          <ImgSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;

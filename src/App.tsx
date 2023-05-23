import Weather from './components/Weather';
import './App.css';
import { ROUTES } from './routes/routes';
import { HashRouter, Route, Navigate, Routes } from 'react-router-dom';
import Help from './components/Help';
import Stats from './components/Stats';
import Navbar from './components/Navbar/Navbar';
import { useAppDispatch } from './store/store';
import { useSelector } from 'react-redux';
import {
  getCurrentWeather,
  selectorCurrentWeatherSlice
} from './store/reducers/currentWeatherSlice';
import { getForecastWeather } from './store/reducers/forecastWeatherSlice';
import { useEffect } from 'react';
import { addDataForRequestCounter, addForTopOneCity } from './store/reducers/statisticsSlice';

const App = () => {
  const dispatch = useAppDispatch();
  const { currentCity, currentWeather } = useSelector(selectorCurrentWeatherSlice);

  useEffect(() => {
    dispatch(getCurrentWeather(currentCity));
    dispatch(getForecastWeather(currentCity));
  });

  useEffect(() => {
    if (currentWeather) {
      dispatch(addDataForRequestCounter());
      dispatch(addForTopOneCity(currentCity));
    }
  });

  return (
    <div className="wrapper">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route element={<Weather />} path={ROUTES.MAIN_ROUTE} />
          <Route element={<Stats />} path={ROUTES.STATS_ROUTE} />
          <Route element={<Help />} path={ROUTES.HELP_ROUTE} />
          <Route path="*" element={<Navigate replace to={ROUTES.MAIN_ROUTE} />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;

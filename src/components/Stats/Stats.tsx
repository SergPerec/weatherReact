import { useSelector } from 'react-redux';
import { selectStatisticsSlice } from '../../store/reducers/statisticsSlice';
import './StatsStyle.css';

const Stats = () => {
  const { requestCounter, topOneCity } = useSelector(selectStatisticsSlice);

  const topCityName = topOneCity ? topOneCity.name : '';
  const topCityCount = topOneCity ? topOneCity.count : '';

  return (
    <div className="container">
      <p>Самый популярный город.</p>
      <div className="count">
        {topCityName && topCityCount
          ? `Город ${topCityName} с количеством запросов - ${topCityCount}.`
          : `Данные отсутствуют.`}
      </div>
      <p>Сколько раз менялся город.</p>
      <div className="count">{`Город менялся - ${requestCounter} раз.`}</div>
    </div>
  );
};

export default Stats;

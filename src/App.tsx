import Weather from './components/Weather';
import './App.css';
import { ROUTES } from './routes/routes';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Help from './components/Help';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="wrapper">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route element={<Weather />} path={ROUTES.MAIN_ROUTE} />
          <Route element={<Help />} path={ROUTES.HELP_ROUTE} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

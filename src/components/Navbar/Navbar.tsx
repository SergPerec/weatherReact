import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import './NavbarStyle.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={ROUTES.MAIN_ROUTE}>Погода</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.STATS_ROUTE}>Статистика</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.HELP_ROUTE}>Помощь</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
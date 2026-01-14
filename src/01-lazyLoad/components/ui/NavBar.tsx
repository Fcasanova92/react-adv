import { NavLink } from "react-router-dom";
import { routes } from "../../../routes/routes";
import logo from '../../../logo.svg';

export const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="React Logo" />

      <ul>
        {routes.map(({ to, nombre }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              {nombre}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

import { NavLink } from "react-router-dom";
import logo from "../../../logo.svg";
import { IRoute } from "../interfaces/Route.interface";

type NavBarProps = {
  routes: IRoute[];
};

export const NavBar = ({routes}: NavBarProps) => {
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

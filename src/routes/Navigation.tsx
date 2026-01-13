import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          {routes.map(({ to, Component, path, nombre }) => (
            <Route key={ to } path={ path } element={ <Component /> } />
          ))}
        </Routes>
      </div>
    </Router>
  );
}
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import { Suspense } from 'react';

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          
          <ul>
            {
              routes.map( ({ to, nombre }) => (
                <li key={ to }>
                  <NavLink to={ to } className={({ isActive }) => isActive ? 'nav-active' : ''}>{ nombre }</NavLink>
                </li>
              ) )
            }
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map(({ to, Component, path }) => (
              <Route key={ to } path={ path } element={ <Component /> } />
            ))}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
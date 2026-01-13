import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { routes } from "../components/pages/routes";


interface Props {}

const LazyLayout: React.FC<Props> = () => {
  return (
    <>
      <h1>LazyLayout Page</h1>
      <ul>
        {routes.map(({ to, nombre }) => (
          <li key={to}>
            <NavLink to={to} className={({ isActive }) => (isActive ? "nav-active" : "")}>
              {nombre}
            </NavLink>
            
          </li>
        ))}
      </ul>
      <Routes>
            {routes.map(({ to, Component, path }) => (
              <Route key={ to } path={ path } element={ <Component /> } />
            ))}
            <Route path="*" element={<Navigate to="lazypage1" />} ></Route>
      </Routes>
    </>
  );
};

export default LazyLayout;

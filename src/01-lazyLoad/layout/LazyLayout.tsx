import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../../routes/routes";


interface Props {}

const LazyLayout: React.FC<Props> = () => {
  return (
    <>
      <h1>LazyLayout Page</h1>
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

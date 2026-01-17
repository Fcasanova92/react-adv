import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./route";
import { MainLayout } from "../../../layout/MainLayout";

export const ShopPagesRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout routes={routes}>
        <Routes>
          {routes.map(({ path, Component }) => {
            return <Route key={path} path={path} element={<Component />} />;
          })}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

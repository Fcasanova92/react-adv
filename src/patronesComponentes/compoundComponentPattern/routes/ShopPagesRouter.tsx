import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./route";
import { MainLayout } from "../../../layout/MainLayout";

export const ShopPagesRouter = () => {
  return (
    <MainLayout routes={routes}>
      <Routes>
        {routes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
        <Route path="*" element={<Navigate to={routes[0].to} replace />} />
      </Routes>
    </MainLayout>
  );
};

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./routes";
import { MainLayout } from "../../layout/MainLayout";


export const LazyAppRouter = () => {
  return (
    <Router>
      <MainLayout routes={routes}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="/" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
};

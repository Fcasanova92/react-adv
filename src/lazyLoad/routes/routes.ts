import React, { LazyExoticComponent, ComponentType } from "react";

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<ComponentType<any>> | ComponentType<any>;
  nombre: string;
}

const LazyPage1 = React.lazy(
  () => import("../components/pages/LazyPage1")
);
const LazyPage2 = React.lazy(
  () => import("../components/pages/LazyPage2")
);
const LazyPage3 = React.lazy(
  () => import("../components/pages/LazyPage3")
);

export const routes: Route[] = [
  {
    to: "/lazypage1",
    path: "lazypage1",
    Component: LazyPage1,
    nombre: "Lazy Page 1",
  },
  {
    to: "/lazypage2",
    path: "lazypage2",
    Component: LazyPage2,
    nombre: "Lazy Page 2",
  },
  {
    to: "/lazypage3",
    path: "lazypage3",
    Component: LazyPage3,
    nombre: "Lazy Page 3",
  },
];

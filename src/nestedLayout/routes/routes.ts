import React, { LazyExoticComponent, ComponentType } from "react";
import NoLazyLayout from "../layout/NoLazyLayout";

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<ComponentType<any>> | ComponentType<any>;
  nombre: string;
}

const LazyLayout = React.lazy(
  () => import("../layout/LazyLayout")
);
  
export const routes: Route[] = [
  {
    to: "/lazylayout",
    path: "/lazylayout/*",
    Component: LazyLayout,
    nombre: "Lazy Layout",
  },
  {
    to: "/nolazylayout",
    path: "/nolazylayout",
    Component: NoLazyLayout,
    nombre: "No Lazy Layout",
  },
];

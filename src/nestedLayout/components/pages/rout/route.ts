import { LazyExoticComponent, ComponentType } from "react";
import LazyPage1 from "../LazyPage1";
import LazyPage2 from "../LazyPage2";
import LazyPage3 from "../LazyPage3";

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<ComponentType<any>> | ComponentType<any>;
  nombre: string;
}

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

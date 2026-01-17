import { ComponentType, LazyExoticComponent } from "react";

export interface IRoute {
  to: string;
  path: string;
  Component: LazyExoticComponent<ComponentType<any>> | ComponentType<any>;
  nombre: string;
}

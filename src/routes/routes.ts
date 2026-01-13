import { LazyExoticComponent, ComponentType, lazy } from "react";
import NoLazyLayout from "../01-lazyLoad/layout/NoLazyLayout";


interface Route {
    to:string;
    path:string;
    Component: LazyExoticComponent<ComponentType<any>> | ComponentType<any>;
    nombre:string;
}

const LazyLayout = lazy(() => import('../01-lazyLoad/layout/LazyLayout'));

export const routes : Route[] = [
    {
        to: '/lazylayout',
        path: 'lazylayout',
        Component: LazyLayout,
        nombre: 'LazyLayout'
    },

        {
        to: '/nolazylayout',
        path: 'nolazylayout',
        Component: NoLazyLayout,
        nombre: 'noLazyLayout'
    },
]
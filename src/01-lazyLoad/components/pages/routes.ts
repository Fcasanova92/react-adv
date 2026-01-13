import { LazyExoticComponent, ComponentType } from "react";
import LazyPage1 from "./LazyPage1";
import LazyPage2 from "./LazyPage2";
import LazyPage3 from "./LazyPage3";
import { Navigate } from "react-router";


interface Route {
    to:string;
    path:string;
    Component: LazyExoticComponent<ComponentType<any>> | ComponentType<any>;
    nombre:string;
}

export const routes : Route[] = [
    {
        to: 'lazypage1',
        path: 'lazypage1',
        Component: LazyPage1,
        nombre: 'LazyPage1'
    },

    {
        to: 'lazypage2',
        path: 'lazypage2',
        Component: LazyPage2,
        nombre: 'LazyPage2'
    },

    {
        to: 'lazypage3',
        path: 'lazypage3',
        Component: LazyPage3,
        nombre: 'LazyPage3'
    },

]
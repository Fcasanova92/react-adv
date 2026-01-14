import React, { LazyExoticComponent, ComponentType } from "react";

interface Route {
    to:string;
    path:string;
    Component: LazyExoticComponent<ComponentType<any>> | ComponentType<any>;
    nombre:string;
}

const LazyPage1 = React.lazy( () => import('../01-lazyLoad/components/pages/LazyPage1') );
const LazyPage2 = React.lazy( () => import('../01-lazyLoad/components/pages/LazyPage2') );
const LazyPage3 = React.lazy( () => import('../01-lazyLoad/components/pages/LazyPage3') );  

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
import {RouteProps} from 'react-router-dom';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {SoapPageAsync} from 'pages/SoapPage/SoapPage.async';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    SOAP = 'soap',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.SOAP]: '/soap',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>,
    },
    [AppRoutes.SOAP]: {
        path: RoutePath.soap,
        element: <SoapPageAsync/>,
    },
}
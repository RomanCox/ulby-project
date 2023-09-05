import React from 'react';
import {Link} from 'react-router-dom';

import {AppRouter} from 'app/providers/router';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import {useTheme} from './providers/ThemeProvider';

import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames';




const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={RoutePath.main}>Main</Link>
            <Link to={RoutePath.about}>About</Link>
            <Link to={RoutePath.soap}>SOAP</Link>
            <AppRouter/>
        </div>
    );
};

export default App;
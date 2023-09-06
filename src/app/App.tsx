import React from 'react';

import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';
import {useTheme} from './providers/ThemeProvider';

import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames';



const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;
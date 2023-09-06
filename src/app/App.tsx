import React from 'react';

import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';
import {useTheme} from './providers/ThemeProvider';

import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames';

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className={'content-page'}>
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    );
};

export default App;
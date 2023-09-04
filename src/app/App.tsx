import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import {useTheme} from './providers/ThemeProvider/lib/useTheme';
import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import {SoapPageAsync} from 'pages/SoapPage/SoapPage.async';

import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames';



const App = () => {
    const {theme, toggleTheme} = useTheme();



    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>

            <Suspense fallback={<p><i>Loading...</i></p>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/soap'} element={<SoapPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
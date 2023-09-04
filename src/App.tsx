import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import {useTheme} from './theme/useTheme';
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {MainPageAsync} from './pages/MainPage/MainPage.async';
import {SoapPageAsync} from './pages/SoapPage/SoapPage.async';

import './styles/index.scss'
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();



    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>

            <Suspense fallback={<p><i>Loading...</i></p>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/soap'} element={<SoapPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
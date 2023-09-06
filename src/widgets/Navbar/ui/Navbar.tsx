import React from 'react';

import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import {classNames} from 'shared/lib/classNames/classNames';
import AppLink from 'shared/ui/AppLink/AppLink';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';

import cls from './Navbar.module.scss';

interface NavbarPropsType {
    className?: string,
}

const Navbar = ({className}: NavbarPropsType) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink to={RoutePath.main}>Main</AppLink>
                <AppLink to={RoutePath.about}>About</AppLink>
                <AppLink to={RoutePath.soap}>SOAP</AppLink>
            </div>
        </div>
    );
};

export default Navbar;

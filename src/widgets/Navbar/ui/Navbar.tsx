import React from 'react';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';

import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarPropsType {
    className?: string,
}

const Navbar = ({ className }: NavbarPropsType) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={RoutePath.main}>{t('Main page')}</AppLink>
                <AppLink to={RoutePath.about}>{t('About us')}</AppLink>
                <AppLink to={RoutePath.soap}>SOAP</AppLink>
            </div>
        </div>
    );
};

export default Navbar;

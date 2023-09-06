import React from 'react';

import {Theme, useTheme} from 'app/providers/ThemeProvider';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import {classNames} from 'shared/lib/classNames/classNames';

import cls from './ThemeSwitcher.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";

interface ThemeSwitcherPropsType {
    className?: string,
}

const ThemeSwitcher = ({className}: ThemeSwitcherPropsType) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
        </Button>
    );
};

export default ThemeSwitcher;
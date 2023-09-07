import React from 'react';

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import { classNames } from 'shared/lib/classNames/classNames';

interface ThemeSwitcherPropsType {
    className?: string,
}

const ThemeSwitcher = ({ className }: ThemeSwitcherPropsType) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};

export default ThemeSwitcher;

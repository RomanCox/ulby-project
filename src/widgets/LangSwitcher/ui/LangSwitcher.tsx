import React from 'react';
import {useTranslation} from 'react-i18next';

import {Button, ThemeButton} from 'shared/ui/Button/Button';
import {classNames} from 'shared/lib/classNames/classNames';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherPropsType {
    className?: string,
}

const LangSwitcher = ({className}: LangSwitcherPropsType) => {
    const {t, i18n} = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLang}
        >
            {t('Language')}
        </Button>
    );
};

export default LangSwitcher;
import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

const ArticlesPage = () => {
    const { t } = useTranslation('articles');

    return (
        <div className={classNames(cls.ArticlesPage, {}, [])}>
            {t('Articles page')}
        </div>
    );
};

export default memo(ArticlesPage);

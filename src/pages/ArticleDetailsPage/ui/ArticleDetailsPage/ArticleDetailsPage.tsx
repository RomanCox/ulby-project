import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = () => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [])}>
            {t('Article Details')}
        </div>
    );
};

export default memo(ArticleDetailsPage);

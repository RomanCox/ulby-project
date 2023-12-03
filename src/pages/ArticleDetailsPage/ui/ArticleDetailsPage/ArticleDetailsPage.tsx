import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = () => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [])}>
            {id ? <ArticleDetails id={id} /> : t('Article not found')}
        </div>
    );
};

export default memo(ArticleDetailsPage);

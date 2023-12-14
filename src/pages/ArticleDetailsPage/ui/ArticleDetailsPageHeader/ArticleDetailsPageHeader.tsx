import { memo, useCallback } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderPropsType {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderPropsType) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [navigate, article?.id]);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('Back')}
            </Button>
            {canEdit && (
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                >
                    {t('Edit')}
                </Button>
            )}
        </div>
    );
});

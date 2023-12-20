import { memo } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ArticleList } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { getArticles } from '../../model/slices/articlesPageSlice/articlesPageSlice';

interface ArticleInfiniteListPropsType {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListPropsType) => {
    const { className } = props;
    const { t } = useTranslation('Articles');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return <Text theme={TextTheme.ERROR} text={t('Error')} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            articles={articles}
            view={view}
            className={className}
        />
    );
});

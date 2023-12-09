import { FC, lazy } from 'react';
import { ArticleDetailsPageProps } from 'pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage';

export const ArticleDetailsPageAsync = lazy(() => new
Promise<{default: FC<ArticleDetailsPageProps>}>((resolve) => {
    // TODO delete setTimeout
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
}));

import { FC, lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new
Promise<{default: FC}>((resolve) => {
    // TODO delete setTimeout
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));

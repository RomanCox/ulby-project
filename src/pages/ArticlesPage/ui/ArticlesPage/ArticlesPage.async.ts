import { FC, lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new
Promise<{default: FC}>((resolve) => {
    // TODO delete setTimeout
    setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));

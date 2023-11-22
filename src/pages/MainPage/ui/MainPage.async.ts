import { FC, lazy } from 'react';

export const MainPageAsync = lazy(() => new
Promise<{default: FC}>((resolve) => {
    // TODO delete setTimeout
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));

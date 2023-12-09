import { FC, lazy } from 'react';

export const AboutPageAsync = lazy(() => new
Promise<{default: FC}>((resolve) => {
    // TODO delete setTimeout
    setTimeout(() => resolve(import('./AboutPage')), 400);
}));

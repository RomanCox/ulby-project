import { FC, lazy } from 'react';

export const ProfilePageAsync = lazy(() => new
Promise<{default: FC}>((resolve) => {
    // TODO delete setTimeout
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));

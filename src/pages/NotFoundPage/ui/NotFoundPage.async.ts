import { FC, lazy } from 'react';
import { NotFoundPagePropsType } from './NotFoundPage';

export const NotFoundPageAsync = lazy(() => new
Promise<{default: FC<NotFoundPagePropsType>}>((resolve) => {
    // TODO delete setTimeout
    setTimeout(() => resolve(import('./NotFoundPage')), 400);
}));

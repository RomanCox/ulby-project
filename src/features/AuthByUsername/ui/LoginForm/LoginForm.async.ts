import { FC, lazy } from 'react';
import { LoginFormPropsType } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormPropsType>>(() => new
Promise<{default: FC<LoginFormPropsType>}>((resolve) => {
    // TODO delete setTimeout
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));

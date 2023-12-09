import { FC, lazy } from 'react';
import { AddCommentFormPropsType } from '../AddCommentForm/AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormPropsType>>(() => new
Promise<{default: FC<AddCommentFormPropsType>}>((resolve) => {
    // TODO delete setTimeout
    setTimeout(() => resolve(import('./AddCommentForm')), 400);
}));

import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListPropsType {
    className?: string;
    comments?: Array<Comment>;
    isLoading?: boolean
}

export const CommentList = memo((props: CommentListPropsType) => {
    const { t } = useTranslation('comments');

    const {
        className,
        comments,
        isLoading,
    } = props;

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}
                    />
                ))
                : <Text text={t('No comments')} />}
        </div>
    );
});

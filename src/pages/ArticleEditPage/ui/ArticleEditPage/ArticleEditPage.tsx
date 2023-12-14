import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPagePropsType {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPagePropsType) => {
    const { className } = props;
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? '???' : '!!!'}
        </Page>
    );
});

export default ArticleEditPage;

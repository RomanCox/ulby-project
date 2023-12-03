import { memo } from 'react';

import { Code } from 'shared/ui/Code/Code';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCodeBlock } from '../../model/types/article';

import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentPropsType {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentPropsType) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});

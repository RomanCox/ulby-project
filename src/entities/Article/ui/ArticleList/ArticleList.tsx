import { HTMLAttributeAnchorTarget, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { Article, ArticlesView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListPropsType {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticlesView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticlesView) => new Array(view === ArticlesView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListPropsType) => {
    const { t } = useTranslation('articles');
    const {
        className,
        articles,
        isLoading,
        view = ArticlesView.SMALL,
        target,
    } = props;

    const isBig = view === ArticlesView.BIG;
    // TODO We can dynamically calculate the number of items by dividing ref.currentWidth by ITEM_WIDTH
    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRenderer = ({
        index, key,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    className={cls.card}
                    article={articles[i]}
                    view={view}
                    target={target}
                    key={articles[i].id}
                />,
            );
        }

        return (
            <div key={key} className={cls.row}>
                {/* <ArticleListItem */}
                {/*    className={cls.card} */}
                {/*    article={articles[index]} */}
                {/*    view={view} */}
                {/*    target={target} */}
                {/* /> */}
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Articles not found')} />
            </div>
        );
    }

    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                width,
                height,
                registerChild,
                onChildScroll,
                isScrolling,
                scrollTop,
            }) => (
                <div
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                    ref={registerChild}
                >
                    <List
                        height={height ?? 700}
                        rowCount={rowCount}
                        rowHeight={isBig ? 700 : 330}
                        rowRenderer={rowRenderer}
                        width={width ? width - 80 : 700}
                        autoHeight
                        onScroll={onChildScroll}
                        scrollTop={scrollTop}
                        isScrolling={isScrolling}
                    />
                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});

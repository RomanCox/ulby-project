import { memo, useCallback, useMemo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/types/article';

interface ArticleTypeTabsPropsType {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsPropsType) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const tabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('ALL'),
        },
        {
            value: ArticleType.IT,
            content: t('IT'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('ECONOMICS'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('SCIENCE'),
        },
    ], [t]);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            className={classNames('', {}, [className])}
            tabs={tabs}
            value={value}
            onTabClick={onTabClick}
        />
    );
});

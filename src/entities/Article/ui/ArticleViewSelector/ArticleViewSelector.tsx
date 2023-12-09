import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticlesView } from '../../model/types/article';

import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorPropsType {
    className?: string;
    view: ArticlesView;
    onViewClick?: (view: ArticlesView) => void;
}

const viewTypes = [
    {
        view: ArticlesView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticlesView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorPropsType) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticlesView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
});

import { HTMLAttributes, memo, ReactNode } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardPropsType extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

export const Card = memo((props: CardPropsType) => {
    const {
        className, children, theme = CardTheme.NORMAL, ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Card, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});

import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextPropsType {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextTheme,
}

export const Text = (props: TextPropsType) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
    } = props;

    return (
        <div className={classNames('', { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};

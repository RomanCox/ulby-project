import React, { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

interface IconPropsType {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconPropsType) => {
    const { className, Svg } = props;

    return (
        <Svg className={classNames(cls.Icon, {}, [className])} />
    );
});

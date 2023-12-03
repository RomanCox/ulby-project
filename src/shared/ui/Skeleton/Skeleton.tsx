import { CSSProperties, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

interface SkeletonPropsType {
    className?: string;
    height?: string | number;
    width?: string | number;
    borderRadius?: string;
}

export const Skeleton = memo((props: SkeletonPropsType) => {
    const {
        className,
        height,
        width,
        borderRadius,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
});

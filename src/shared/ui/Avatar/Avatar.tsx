import React, { CSSProperties, useMemo } from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarPropsType {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({
    className, src, size, alt,
}: AvatarPropsType) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            className={classNames(cls.Avatar, mods, [className])}
            style={styles}
            src={src}
            alt={alt}
        />
    );
};

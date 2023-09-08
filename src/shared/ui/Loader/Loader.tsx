import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Loader.module.scss';

interface LoaderPropsType {
    className?: string,
}

const Loader = ({ className }: LoaderPropsType) => {
    const strips = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <div className={classNames(cls.Loader, {}, [className])}>
            {
                strips.map((el) => (
                    <div key={el} />
                ))
            }
        </div>
    );
};

export default Loader;

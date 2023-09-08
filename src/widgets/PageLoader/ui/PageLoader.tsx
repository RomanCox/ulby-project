import React from 'react';

import Loader from 'shared/ui/Loader/Loader';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './PageLoader.module.scss';

interface PageLoaderPropsType {
    className?: string,
}

const PageLoader = ({ className }: PageLoaderPropsType) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);

export default PageLoader;

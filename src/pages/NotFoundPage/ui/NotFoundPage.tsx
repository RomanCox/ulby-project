import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import { Page } from 'widgets/Page/Page';
import cls from './NotFoundPage.module.scss';

export interface NotFoundPagePropsType {
    className?: string;
}

const NotFoundPage = ({ className }: NotFoundPagePropsType) => {
    const { t } = useTranslation();

    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Page not found')}
        </Page>
    );
};

export default NotFoundPage;

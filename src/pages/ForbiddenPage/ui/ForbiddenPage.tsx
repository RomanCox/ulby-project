import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation('admin');

    return (
        <Page>
            {t('You don\'t have an access to this page')}
        </Page>
    );
};

export default ForbiddenPage;

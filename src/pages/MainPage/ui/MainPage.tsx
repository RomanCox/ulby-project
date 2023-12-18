import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { HStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Main page')}
            <div>123</div>
            <div>456</div>
            <HStack>
                <div>dfg</div>
                <ListBox
                    defaultValue="Выберите значение"
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '1' },
                        { value: '2', content: '22', disabled: true },
                        { value: '3', content: '333' },
                    ]}
                />
            </HStack>
            <div>iudfsghb</div>
            <div>sdgh</div>
            <div>sdgerdtfhb</div>
        </Page>
    );
};

export default MainPage;

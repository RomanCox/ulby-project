import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CurrencySelectPropsType {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readOnly?: boolean;
}

const options = [
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Spain, content: Country.Spain },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Russia, content: Country.Russia },
];

export const CountrySelect = memo((props: CurrencySelectPropsType) => {
    const {
        className,
        value,
        onChange,
        readOnly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            label={t('Choose country')}
            value={value}
            items={options}
            onChange={onChangeHandler}
            defaultValue={t('Choose country')}
            readOnly={readOnly}
            direction="top right"
        />
    );
});

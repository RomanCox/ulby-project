import { memo, useCallback } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
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
        <Select
            className={classNames('', {}, [className])}
            label={t('Choose country')}
            value={value}
            options={options}
            onChange={onChangeHandler}
            readOnly={readOnly}
        />
    );
});

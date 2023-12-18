import { memo, useCallback } from 'react';

// import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
// import { Select } from 'shared/ui/Select/Select';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectPropsType {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readOnly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.BTC, content: Currency.BTC },
];

export const CurrencySelect = memo((props: CurrencySelectPropsType) => {
    const {
        className,
        value,
        onChange,
        readOnly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            label={t('Choose currency')}
            value={value}
            items={options}
            onChange={onChangeHandler}
            defaultValue={t('Choose currency')}
            readOnly={readOnly}
            direction="top"
        />
    );
});

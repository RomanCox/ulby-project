import React from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency } from 'entities/Currency';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect/CurrencySelect';
import { Country, CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardPropsType {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readOnly?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardPropsType) => {
    const {
        className,
        data,
        isLoading,
        error,
        readOnly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Error')}
                    text={t('Reload page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readOnly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data.avatar} />
                    </div>
                )}
                <Input
                    value={data?.firstName}
                    placeholder={t('Your first name')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('Your last name')}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Your age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readOnly={readOnly}
                    type="number"
                />
                <Input
                    value={data?.city}
                    placeholder={t('City')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Avatar')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Username')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readOnly={readOnly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readOnly={readOnly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readOnly={readOnly}
                />
            </div>
        </div>
    );
};

import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country';

export enum ValidateProfileError {
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
    INCORRERT_USER_DATA = 'INCORRERT_USER_DATA',
    INCORRERT_AGE = 'INCORRERT_AGE',
    INCORRERT_COUNTRY = 'INCORRERT_COUNTRY',
}

export interface Profile {
    firstName?: string;
    lastName?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readOnly: boolean;
    validateErrors?: Array<ValidateProfileError>;
}

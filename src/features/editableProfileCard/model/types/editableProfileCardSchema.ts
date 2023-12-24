import { Profile } from 'entities/Profile';

export enum ValidateProfileError {
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
    INCORRERT_USER_DATA = 'INCORRERT_USER_DATA',
    INCORRERT_AGE = 'INCORRERT_AGE',
    INCORRERT_COUNTRY = 'INCORRERT_COUNTRY',
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readOnly: boolean;
    validateErrors?: ValidateProfileError[];
}

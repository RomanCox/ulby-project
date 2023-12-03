import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        firstName,
        lastName,
        age,
        country,
    } = profile;

    const errors: Array<ValidateProfileError> = [];

    if (!firstName || !lastName) {
        errors.push(ValidateProfileError.INCORRERT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRERT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRERT_COUNTRY);
    }

    return errors;
};

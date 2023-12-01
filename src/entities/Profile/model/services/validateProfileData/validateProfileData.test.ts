import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'roman_cox',
    age: 22,
    country: Country.Spain,
    lastName: 'Cox',
    firstName: 'Rom',
    city: 'Barcelona',
    currency: Currency.BTC,
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and/or last names', async () => {
        const result = validateProfileData({ ...data, firstName: '', lastName: '' });

        expect(result).toEqual([
            ValidateProfileError.INCORRERT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: 0 });

        expect(result).toEqual([
            ValidateProfileError.INCORRERT_AGE,
        ]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRERT_COUNTRY,
        ]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRERT_USER_DATA,
            ValidateProfileError.INCORRERT_AGE,
            ValidateProfileError.INCORRERT_COUNTRY,
        ]);
    });
});

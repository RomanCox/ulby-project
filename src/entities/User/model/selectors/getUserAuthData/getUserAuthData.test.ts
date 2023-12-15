import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';

describe('getUserAuthDataSelector.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            username: 'admin',
        };
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: data,
            },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: undefined,
            },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
    });
});

import {
    User, userActions, userReducer, UserSchema,
} from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const user: User = {
    id: '1',
    username: 'admin',
};

describe('userSlice.test', () => {
    test('test set auth data', () => {
        const state: DeepPartial<User> = user;
        expect(userReducer(
            state as UserSchema,
            userActions.setAuthData(user),
        )).toEqual({
            authData: { id: '1', username: 'admin' },
            id: '1',
            username: 'admin',
        });
    });

    test('test init auth data', () => {
        const state: DeepPartial<User> = user;
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
        expect(userReducer(
            state as UserSchema,
            userActions.initAuthData(),
        )).toEqual({ _inited: true, authData: user, ...user });
    });

    test('test logout', () => {
        const lsData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        const state: DeepPartial<User> = user;
        expect(userReducer(
            state as UserSchema,
            userActions.logout(),
        )).toEqual({
            authData: undefined, id: '1', username: 'admin',
        });
        expect(lsData).toEqual(null);
    });
});

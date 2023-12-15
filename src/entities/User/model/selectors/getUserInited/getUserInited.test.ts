import { StateSchema } from 'app/providers/StoreProvider';
import { getUserInited } from 'entities/User';

describe('getUserInited.test', () => {
    test('should return _inited', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                _inited: false,
            },
        };
        expect(getUserInited(state as StateSchema)).toEqual(false);
    });
});

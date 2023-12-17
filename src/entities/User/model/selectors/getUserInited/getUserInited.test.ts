import { StateSchema } from 'app/providers/StoreProvider';
import { getUserInited } from '../getUserInited/getUserInited';

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

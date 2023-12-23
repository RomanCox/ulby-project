import { StateSchema } from 'app/providers/StoreProvider';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../selectors/addCommentFormSelectors';

describe('addCommentFormSelectors.test', () => {
    test('should return data', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'text',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('text');
    });

    test('should return data', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'some error',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('some error');
    });
});

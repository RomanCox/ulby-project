import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';
import { AddCommentFormSchema } from '../types/addCommentForm';

describe('addCommentFormSlice.test', () => {
    test('test add comment', () => {
        const state: DeepPartial<AddCommentFormSchema> = { text: 'text' };
        expect(addCommentFormReducer(
            state as AddCommentFormSchema,
            addCommentFormActions.setText('text'),
        )).toEqual({ text: 'text' });
    });
});
